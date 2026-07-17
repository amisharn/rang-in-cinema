from fastapi import FastAPI
from fastapi import UploadFile, File
from pathlib import Path
from search import search

app = FastAPI()
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



