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

Day 3

What did i do?

- Built a dataset generation pipeline.

- Used OpenCV to automatically extract frames from movie trailers every two seconds.

What did I learn?

- I used trailers to extract frames from the movie as it would give an accurate representation of the color grading of the whole movie.

- Only extracted frame per 2 second as it would be pretty similar in between.

Day 4

What did i do?

- Wrote a script to extract feature vectors from all the images in the dataset.

- Converted that vector and other info like name & path into a .pkl file.

What did I learn?

- I learned the use of pathlib objects for file handling.

- I also understood serialization and Deserialization for saving my feature vectors so i do'nt have to recompute it everytime.

Day 5

What did i do?

- Wrote a pipeline to compare a test image's feature vector with each one of the feature vector stored in the .pkl file.

- Displayed the top 3 matching frames.

- Version 1 of my color grading similarity search application is completed.

What did i learn?

- The histogram analysis may not be perfect as we are only comparing hue from the hsv values. Feature extraction is very important for accurate results.

Day 6

What did i do?

- Got started with basic UI. Whatever i did today was for learning i am not keeping it. (I'll buildthe image upload interface for Rang-In-Cinema tomorrow.)

What did i learn?

- Learned the fundamentals of React: components, JSX, props, state, and event handling.

Day 7

What did i do?

- Built the image upload component and preview components.

- Understood UseEffect and URL.createObjectURL().

- Broke the UI into reusable React components.

- Added a search button that's disabled until an image is uploaded.

What did i learn?

- Separation of concerns makes the code cleaner.

- You have to think of edge cases like what if the image doesn't exist.

Day 8

What did i do?

- Built a FastAPI server with image upload support.

- Created an endpoint that accepts an image, compares its color histogram against my feature database, and returns the top 3 matching movie frames as JSON.

What did i learn?

- I learned about multipart form data uploads. For now i'll be storing the uploaded image in a temp folder.

- I also understood the importance of modularity and the structure of a project; separating API, search logic, and database code makes a project easier to maintain.

Day 9

What did i do?

- Connected my React frontend to a FastAPI backend.

- Implemented image uploads from the UI.

- Displayed the top matching movie frames based on color similarity.

- Version 1 has a fully working interface now!

What did i learn?

- Frontend and backend communicate using HTTP requests.

- CORS exists so that frontend and backend running in different origin can share their resources.
