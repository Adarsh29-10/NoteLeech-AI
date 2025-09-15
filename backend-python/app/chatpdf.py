import os
from pathlib import Path
import json
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_qdrant import QdrantVectorStore

# ✅ Set API key (you can also put this in environment variables or .env file)
os.environ["GOOGLE_API_KEY"] = "API-key need mine is not working"

json_path = Path(__file__).parent / "fileName.json"
with open(json_path, "r") as f:
    data = json.load(f)

file_name = data["fileName"]

pdf_path = Path(__file__).parent / file_name

# Load PDF
loader = PyPDFLoader(file_path=str(pdf_path))
docs = loader.load()

# Split into chunks
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)
split_docs = text_splitter.split_documents(docs)

# Create embedder
embedder = GoogleGenerativeAIEmbeddings(
    model="models/embedding-001"
)

# ✅ Pass split_docs directly here instead of []
vector_store = QdrantVectorStore.from_documents(
    documents=split_docs,
    url="http://localhost:6333",
    collection_name="chat_pdf_collection",
    embedding=embedder,
)



# retriever = QdrantVectorStore.from_existing_collection(
#     url="http://localhost:6333",
#     collection_name="chat_pdf_collection",
#     embedding=embedder,
# )

# search_results = retriever.similarity_search(
#     query="what is noteleech?"
# )

# print("relevant chuncks",search_results)

# system_prompt = f"""
# You are an helpful ai.

# context:
# {search_results}

# ab isme prompt daalo acche se aur bolo output do
# """