from fastapi import FastAPI
from fastapi import UploadFile, File
from pathlib import Path
from app.search import search
from fastapi.staticfiles import StaticFiles
from pathlib import Path

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

BASE_DIR = Path(__file__).resolve().parent.parent.parent

app.add_middleware(CORSMiddleware, allow_origins = ["http://localhost:5173"], allow_credentials = True, allow_methods = ["*"], allow_headers = ["*"] )
app.mount ("/frames", StaticFiles(directory=BASE_DIR/"dataset"/"frames"),name="frames")

TEMP_IMAGE_PATH = Path("./temp/uploaded_img.png")

@app.get("/")
def home():
    return {"message": "Server Running!"}

@app.post("/search")
async def search_image(file : UploadFile = File(...)):
    TEMP_IMAGE_PATH.parent.mkdir(parents=True,exist_ok=True)
    with open (TEMP_IMAGE_PATH, "wb") as image:
        content = await file.read()
        image.write(content)
    results = search(TEMP_IMAGE_PATH)
    return {"results": results}



