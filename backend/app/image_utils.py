import cv2 as cv
import sys
import numpy as np
import matplotlib.pyplot as plt


def process_image(path):
    img = cv.imread(path)
    if img is None:
        sys.exit("Can't read Image!")
    hsv = convert_to_hsv(img)
    hist = extract_histogram(hsv)
    normalized = normalize_hist(hist)
    return normalized

def convert_to_hsv(img):
    hsv = cv.cvtColor(img, cv.COLOR_BGR2HSV)
    return hsv

def extract_histogram(hsv):
    hist = cv.calcHist([hsv], [0], None, [30], [0,180])
    
    #Convert (30,1) histogram to 1D feature vector (30,)
    hist = hist.flatten() 
    return hist

#Normalized so that it's easy to compare images of different sizes without any bias
def normalize_hist(hist):
    normalized = cv.normalize(hist,None,1,0,cv.NORM_L1)
    return normalized

#Experimental histogram comparison function p.s. i am not using this for retrieval
def compare_hist_manual(hist1,hist2):
    total_diff = 0
    for x,y in zip(hist1, hist2):
        if x == 0 and y == 0:
            continue
        total_diff += (((x-y)/(x+y))**2)
    similarity = 1-total_diff
    return similarity

#Compared with opencv function using the correlation metric
def compare_hist_opencv(hist1, hist2):
    similarity = cv.compareHist(hist1,hist2,cv.HISTCMP_CORREL)
    return similarity

# def plot_histograms(hist1,hist2):
#     labels = ["Red","Yellow","Green","Cyan","Blue","Magenta"]

#     x = np.arange(len(labels))

#     width = 0.35

#     plt.figure(figsize=(8,5))

#     plt.bar(x-width/2,hist1,width,label = "Fallen Angels")
#     plt.bar(x+width/2,hist2,width,label = "Chungking Express")

#     plt.xticks(x,labels)

#     plt.xlabel("Hue Bucket")
#     plt.ylabel ("Normalized Frequency")
#     plt.title ("Hue Distribution")

#     plt.legend()
#     plt.show()


    
if __name__ == "__main__":
    normalized1 = process_image('dataset/movies/fallen_angels.png')
    normalized2 = process_image('dataset/movies/chungking_express.png')

    similarity_manual = compare_hist_manual(normalized1, normalized2)
    print(f"Similarity Manual: {similarity_manual:.02f}")

    correlation = compare_hist_opencv(normalized1, normalized2)
    print(f"Correlation: {correlation:.02f}")
    if correlation > 0.9:
        print ("Very Similar")
    elif correlation > 0.5:
        print ("Somewhat Similar")
    elif correlation >0:
        print("Weakly Similar")
    else:
        print("Very Different")

    # plot_histograms(normalized1,normalized2)







