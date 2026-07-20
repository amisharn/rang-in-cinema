import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ImageUpload from "./components/ImageUpload.jsx";
import Preview from "./components/Preview.jsx";
import Search from "./components/SearchButton.jsx";
import Results from "./components/Results.jsx";
import { useState, useEffect } from "react";
import SearchButton from "./components/SearchButton.jsx";

function App() {
  const [title, setTitle] = useState("Rang-In-Cinema");
  const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (image == null) {
      return;
    }
    const url = URL.createObjectURL(image);
    setPreviewURL(url);
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [image]);

  async function handleSearch() {
    const formData = new FormData();
    formData.append("file", image);
    const API_URL = import.meta.env.VITE_API_URL;

    const response = await fetch(`${API_URL}/search`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setResults(data.results);
    console.log(data.results);
  }

  return (
    <div className="app">
      <Header title={title} subtitle="Find Movies With Similar Colors" />
      <ImageUpload setImage={setImage} />
      <p>Selected:</p>
      <p>{image && image.name}</p>
      <Preview url={previewURL} />
      <SearchButton disabled={image === null} search={handleSearch} />
      <Results results={results} />
      <Footer />
    </div>
  );
}

export default App;
