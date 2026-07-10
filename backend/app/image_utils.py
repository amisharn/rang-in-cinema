import cv2 as cv
import sys

def load_image(path):
    img = cv.imread(path)
    if img is None:
        sys.exit("Image couldn't be read!")
    return img

def convert_to_hsv(img):
    hsv = cv.cvtColor(img, cv.COLOR_BGR2HSV)
    return hsv

def extract_histogram(hsv):
    hist = cv.calcHist([hsv], [0], None, [6], [0,180])
    
    #Convert (6,1) histogram to 1D feature vector (6,)
    hist = hist.flatten() 
    return hist

#Normalized so that it's easy to compare images of different sizes without any bias
def normalize_hist(hist):
    normalized = cv.normalize(hist,None,1,0,cv.NORM_L1)
    return normalized

if __name__ == "__main__":
    img = load_image('dataset/movies/image.jpeg')
    hsv = convert_to_hsv(img)
    hist = extract_histogram(hsv)
    normalized = normalize_hist(hist)

    print(hsv.shape , normalized)


