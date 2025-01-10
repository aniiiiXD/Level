const express = require("express");  
const app = express();
const cors = require("cors"); 
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());



class LangflowClient {
    constructor(baseURL, applicationToken) {
        this.baseURL = baseURL;
        this.applicationToken = applicationToken;
    }
    async post(endpoint, body, headers = {"Content-Type": "application/json"}) {
        headers["Authorization"] = `Bearer ${this.applicationToken}`;
        headers["Content-Type"] = "application/json";
        const url = `${this.baseURL}${endpoint}`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            });

            const responseMessage = await response.json();
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText} - ${JSON.stringify(responseMessage)}`);
            }
            return responseMessage;
        } catch (error) {
            console.error('Request Error:', error.message);
            throw error;
        }
    }

    async initiateSession(flowId, langflowId, inputValue, inputType = 'chat', outputType = 'chat', stream = false, tweaks = {}) {
        const endpoint = `/lf/${langflowId}/api/v1/run/${flowId}?stream=${stream}`;
        return this.post(endpoint, { input_value: inputValue, input_type: inputType, output_type: outputType, tweaks: tweaks });
    }

    handleStream(streamUrl, onUpdate, onClose, onError) {
        const eventSource = new EventSource(streamUrl);

        eventSource.onmessage = event => {
            const data = JSON.parse(event.data);
            onUpdate(data);
        };

        eventSource.onerror = event => {
            console.error('Stream Error:', event);
            onError(event);
            eventSource.close();
        };

        eventSource.addEventListener("close", () => {
            onClose('Stream closed');
            eventSource.close();
        });

        return eventSource;
    }

    async runFlow(flowIdOrName, langflowId, inputValue, inputType = 'chat', outputType = 'chat', tweaks = {}, stream = false, onUpdate, onClose, onError) {
        try {
            const initResponse = await this.initiateSession(flowIdOrName, langflowId, inputValue, inputType, outputType, stream, tweaks);
            console.log('Init Response:', initResponse);
            if (stream && initResponse && initResponse.outputs && initResponse.outputs[0].outputs[0].artifacts.stream_url) {
                const streamUrl = initResponse.outputs[0].outputs[0].artifacts.stream_url;
                console.log(`Streaming from: ${streamUrl}`);
                this.handleStream(streamUrl, onUpdate, onClose, onError);
            }
            return initResponse;
        } catch (error) {
            console.error('Error running flow:', error);
            onError('Error initiating session');
        }
    }
}

async function main(inputValue, inputType = 'chat', outputType = 'chat', stream = false) {
    const flowIdOrName = '40ebae14-6650-4ff7-baa2-499faed5f845';
    const langflowId = 'b24d0344-3bfe-4ae1-9bee-70f83bd97f0b';
    const applicationToken = process.env.APPLICATION_TOKEN;
    const langflowClient = new LangflowClient('https://api.langflow.astra.datastax.com', applicationToken);

    try {
        const tweaks = {
            "ChatInput-wXLwp": {},
            "Prompt-arQBc": {},
            "ChatOutput-zhP3P": {},
            "GroqModel-dXJc0": {},
            "AstraDBToolComponent-aCDZk": {},
            "File-9q20a": {},
            "ParseData-LTOHv": {},
            "Prompt-MS4jw": {}
        };
        const response = await langflowClient.runFlow(
            flowIdOrName,
            langflowId,
            inputValue,
            inputType,
            outputType,
            tweaks,
            stream,
            (data) => console.log("Received:", data.chunk), // onUpdate
            (message) => console.log("Stream Closed:", message), // onClose
            (error) => console.log("Stream Error:", error) // onError
        );

        if (!stream && response && response.outputs) {
            const flowOutputs = response.outputs[0];
            const firstComponentOutputs = flowOutputs.outputs[0];
            const output = firstComponentOutputs.outputs.message;

            console.log("Final Output:", output.message.text);
            return output.message.text; // Return the final output
        }

        return response; // Return the full response for streaming or unexpected cases
    } catch (error) {
        console.error('Main Error:', error.message);
        throw error; // Rethrow the error to the caller
    }
}


const args = process.argv.slice(2);
if (args.length < 1) {
console.error('Please run the file with the message as an argument: node server.js "user_message"');
}
main(
args[0], // inputValue
args[1], // inputType
args[2], // outputType
args[3] === 'true' // stream
);


app.get("/socialAnalytics", async (req, res) => {
    try {
        // Extract query parameters from the request
        const {
            inputValue = "Analyze my social media performance",
            inputType = "chat",
            outputType = "chat",
            stream = "false"
        } = req.query;
        // Add CORS headers
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        // Call the main function with the extracted parameters
        const response = await main(
            inputValue,
            inputType,
            outputType,
            stream === 'true'
        );
        // Make sure the response is properly formatted
        const formattedResponse = {
            result: JSON.stringify({
                overallPerformance: {
                    totalPosts: 100,
                    totalLikes: 1500,
                    totalComments: 300,
                    totalShares: 200
                },
                postPerformance: [
                    {
                        postId: 1,
                        type: "Image",
                        likes: 150,
                        comments: 30,
                        shares: 20,
                        datePosted: "2024-03-15",
                        hashtags: ["#marketing", "#social"]
                    },
                    // Add more post performance data as needed
                ],
                insights: [
                    {
                        mostEngagingPost: {
                            postId: 1,
                            likes: 150
                        }
                    },
                    {
                        bestHashtags: {
                            hashtags: ["#marketing", "#social", "#business"]
                        }
                    }
                ]
            })
        };
        // Send the response back to the client
        res.status(200).json(formattedResponse);
    } catch (error) {
        console.error('Error in /socialAnalytics endpoint:', error.message);
        res.status(500).json({
            error: "An error occurred while executing the flow",
            message: error.message
        });
    }
});



app.listen(3002, () => {
    console.log("server is up and running on port 3002");
});