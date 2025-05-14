import React, { useState } from "react";
import Header from "./components/Header";
import { Libros } from "./components/Libros";
import { datalibros } from "./mocks/datalibros.json";
import "./styles/App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // Estado compartido para la búsqueda

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Libros datalibros={datalibros} searchTerm={searchTerm} />
    </>
  );
}

export default App;
