import os
from langchain_astradb import AstraDBVectorStore
from langchain_core.documents import Document
from langchain_openai import OpenAIEmbeddings

from datasets import load_dataset
from dotenv import load_dotenv

load_dotenv()

ASTRA_DB_APPLICATION_TOKEN = os.environ["ASTRA_DB_APPLICATION_TOKEN"]
ASTRA_DB_API_ENDPOINT = os.environ["ASTRA_DB_API_ENDPOINT"]
ASTRA_DB_KEYSPACE = os.environ.get("ASTRA_DB_KEYSPACE")
GEMINI_API_KEY = os.environ["OPENAI_API_KEY"]

embedding = OpenAIEmbeddings()
vstore = AstraDBVectorStore(
    collection_name="test",
    embedding=embedding,
    token=ASTRA_DB_APPLICATION_TOKEN,
    api_endpoint=ASTRA_DB_API_ENDPOINT,
    namespace=ASTRA_DB_KEYSPACE,
)