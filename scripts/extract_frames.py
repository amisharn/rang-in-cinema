from pathlib import Path
import cv2 as cv


if __name__ == "__main__":
    trailer = Path("dataset/trailers")
    output = Path("dataset/frames")

    trailers = trailer.glob("*.mp4")


    for trailer in trailers:
        movie_name = trailer.stem

        movie_folder = output / movie_name
    
        movie_folder.mkdir(parents=True, exist_ok=True)

        cap = cv.VideoCapture(str(trailer))

        fps = cap.get(cv.CAP_PROP_FPS)

        interval = int(fps*2)
        
        frame_count = 0
        saved_count = 0

        

        while True:
            ret,frame = cap.read()

            if not ret:
                break

            frame_count+=1

            if frame_count % interval == 0:
                saved_count += 1
                filename = movie_folder/f"{movie_name}_{saved_count:03d}.jpg"
                cv.imwrite(str(filename), frame)
                print (f"{filename} extracted!")
                
        
        print(f"{movie_name}:{saved_count} frames extracted!")
        cap.release()


