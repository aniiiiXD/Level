function parseToJSON(inputText) {
    const result = {};

    // Regex patterns for each section
    const overallPerformancePattern = /\*\*Overall Performance\*\*\n- Total Posts: (\d+)\n- Total Likes: ([\d+ ]+)\n- Total Comments: ([\d+ ]+)\n- Total Shares: ([\d+ ]+)/;
    const postPerformancePattern = /\*\*Post Performance by Type\*\*\n([\s\S]*?)\*\*Post Performance by Date/;
    const postByDatePattern = /\*\*Post Performance by Date\*\*\n([\s\S]*?)\*\*Hashtag Performance/;
    const hashtagPerformancePattern = /\*\*Hashtag Performance\*\*\n([\s\S]*?)\*\*Insights and Recommendations/;
    const insightsPattern = /\*\*Insights and Recommendations\*\*\n([\s\S]*)/;

    // Parse Overall Performance
    const overallMatch = inputText.match(overallPerformancePattern);
    if (overallMatch) {
        result.overallPerformance = {
            totalPosts: parseInt(overallMatch[1], 10),
            totalLikes: parseInt(overallMatch[2].replace(/\D+/g, ''), 10),
            totalComments: parseInt(overallMatch[3].replace(/\D+/g, ''), 10),
            totalShares: parseInt(overallMatch[4].replace(/\D+/g, ''), 10),
        };
    }

    // Parse Post Performance by Type
    const postPerformanceMatch = inputText.match(postPerformancePattern);
    if (postPerformanceMatch) {
        result.postPerformanceByType = {};
        const typePattern = /-\s\*\*(.+?)\*\*:\s(\d+)\s.*?Average Likes: ([\d.]+).*?Average Comments: ([\d.]+).*?Average Shares: ([\d.]+)/g;
        let match;
        while ((match = typePattern.exec(postPerformanceMatch[1])) !== null) {
            result.postPerformanceByType[match[1].toLowerCase()] = {
                totalPosts: parseInt(match[2], 10),
                averageLikes: parseFloat(match[3]),
                averageComments: parseFloat(match[4]),
                averageShares: parseFloat(match[5]),
            };
        }
    }

    // Parse Post Performance by Date
    const postByDateMatch = inputText.match(postByDatePattern);
    if (postByDateMatch) {
        result.postPerformanceByDate = {};
        const datePattern = /\*\*(\w+\s\d+\w+)\*\*:\s1 post\n- Likes: (\d+)\n- Comments: (\d+)\n- Shares: (\d+)/g;
        let match;
        while ((match = datePattern.exec(postByDateMatch[1])) !== null) {
            result.postPerformanceByDate[match[1]] = {
                likes: parseInt(match[2], 10),
                comments: parseInt(match[3], 10),
                shares: parseInt(match[4], 10),
            };
        }
    }

    // Parse Hashtag Performance
    const hashtagMatch = inputText.match(hashtagPerformancePattern);
    if (hashtagMatch) {
        result.hashtagPerformance = {};
        const hashtagPattern = /-\s\*\*(#\w+)\*\*:\s1 post\n- Likes: (\d+)\n- Comments: (\d+)\n- Shares: (\d+)/g;
        let match;
        while ((match = hashtagPattern.exec(hashtagMatch[1])) !== null) {
            result.hashtagPerformance[match[1]] = {
                likes: parseInt(match[2], 10),
                comments: parseInt(match[3], 10),
                shares: parseInt(match[4], 10),
            };
        }
    }

    // Parse Insights and Recommendations
    const insightsMatch = inputText.match(insightsPattern);
    if (insightsMatch) {
        result.insightsAndRecommendations = insightsMatch[1]
            .split('\n')
            .map((line) => line.trim())
            .filter((line) => line.length > 0);
    }

    return result;
}

// Example usage
const inputText = `**Overall Performance**
- Total Posts: 5
- Total Likes: 1378 (549 + 79 + 141 + 681 + 519)
- Total Comments: 185 (86 + 28 + 26 + 38 + 27)
- Total Shares: 73 (8 + 16 + 43 + 5 + 46)

// More sections...
`;

console.log(parseToJSON(inputText));
