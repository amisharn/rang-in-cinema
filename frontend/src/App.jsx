import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ImageUpload from "./components/ImageUpload.jsx";
import Preview from "./components/Preview.jsx";
import Search from "./components/SearchButton.jsx";
import { useState, useEffect } from "react";
import SearchButton from "./components/SearchButton.jsx";

function App() {
  const [title, setTitle] = useState("Rang-In-Cinema");
  const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

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

  return (
    <div className="app">
      <Header title={title} subtitle="Find Movies With Similar Colors" />
      <ImageUpload setImage={setImage} />
      <p>Selected:</p>
      <p>{image && image.name}</p>
      <Preview url={previewURL} />
      <SearchButton disabled={image === null} />
      <Footer />
    </div>
  );
}

export default App;
