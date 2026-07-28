import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import UploadPanel from "./components/UploadPanel.jsx";
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
    <div className="min-h-screen bg-[#0B0B12] text-white px-10 py-10">
      <div className="app">
        <Header
          title="रङ-इन-सिनेमा"
          subtitle="find movie stills through color"
        />
        <main className="content">
          <div className="main-layout">
            <div className="left-panel">
              <UploadPanel
                image={image}
                previewURL={previewURL}
                setImage={setImage}
              />

              <SearchButton disabled={image === null} search={handleSearch} />
            </div>

            <div className="right-panel">
              <Results results={results} />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
