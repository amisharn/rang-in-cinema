import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Click from "./components/Click.jsx";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("Rang-In-Cinema");

  return (
    <>
      <Header title={title} subtitle="Find Movies With Similar Colors" />
      <Click setTitle={setTitle} newTitle="Movie Color Grade Finder" />
      <Footer />
    </>
  );
}

export default App;
