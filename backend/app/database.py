from pathlib import Path
import pickle

 
DB_PATH = (Path(__file__).resolve().parent.parent.parent/"dataset"/"features_db"/"features.pkl")

def load_features():
    with open (DB_PATH,"rb") as file:
        return pickle.load(file)