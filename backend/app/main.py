import pickle
import image_utils as iu
import sys
from pathlib import Path

db = Path("dataset/features_db/features.pkl")
test = Path("dataset/test/test.png")

k = 3

with open (db , "rb") as file:
    features = pickle.load(file)


if test.exists() == False:
    sys.exit("Couldn't read Image!")

comparison_list = []

input_hist = iu.process_image(test)

for record in features:
    correlation = iu.compare_hist_opencv(input_hist,record["histogram"])
    comparison_list.append({"correlation": correlation, "Movie": record["movie_name"], "Frame" : record["location"]})

def find_correlation(record):
    return record["correlation"]

sorted_list = sorted(comparison_list, key= find_correlation ,reverse=True)


print(f"Top {k} List: \n ")
for i in range(k):
    print(f' {i+1}. Movie Name: {sorted_list[i]["Movie"]} \n Correlation: {sorted_list[i]["correlation"]} \n Frame: {sorted_list[i]["Frame"]}')

    