from pathlib import Path
import image_utils as iu
import pickle

features = []

dataset = Path("dataset/frames/")
output = Path("dataset/features_db/features.pkl")


for movie in dataset.iterdir():
    if movie.is_dir():
        frame = movie.glob("*.jpg")
        for image in frame:
            hist = iu.process_image(image)
            
            features.append({
                "movie_name": movie.name,
                "histogram" : hist,
                "location" : str(image)
            })
output.parent.mkdir(parents=True,exist_ok=True)
with open(output,"wb") as file:
    pickle.dump(features,file)
    print(f"Saved {len(features)} features to {output}")

