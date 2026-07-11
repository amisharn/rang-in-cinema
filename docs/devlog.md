Day 1

What did I do?

- Set up the project structure.

- Created functions to load image, convert to hsv from bgr, extract the histogram and flatten the histogram and normalize the distributiion values.

What did I learn?

- Learned the importance of feature extraction, why hsv is more suitable than bgr for this project, and why should the distribution be normalized. I also learned about Single Responsibility Principle of SE and how should a project be structured.

Day 2

What did I do?

- Manually created a comparison function for histogram for learning purpose

- Used OpenCV compareHist() using correlation metric

- Compared and plotted the histogram to analyze distribution using Matplotlib

What did I learn?

- My manual function was not bounded

- You can use metrics like correlation, intersection, bhattacharya distance and chi-square for comparison

- Correlation is the most suitable for this project as we try to find out how similar the color distributions are in the images

- How to visualize feature vectors using Matplotlib
