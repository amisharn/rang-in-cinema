from app.database import load_features
import app.image_utils as iu
from fastapi import HTTPException

def search (query_image, k = 3):
    comparison_list =[]
    features = load_features()
    if not query_image.exists():
        raise HTTPException(status_code=404, detail="Image not found")
    else:
        query_vector = iu.process_image(query_image)
        for feature in features:
            correlation = iu.compare_hist_opencv(query_vector,feature["histogram"])
            comparison_list.append({"correlation": f"{correlation:.2f}", "Movie": feature["movie_name"], "Frame" : feature["location"]})
    sorted_list = sorted(comparison_list,key = lambda result : result["correlation"],reverse = True)
    return sorted_list[0:k]

            



