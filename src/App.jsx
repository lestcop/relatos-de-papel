import React from "react";
import Header from "./components/Header"
import { Libros } from "./components/Libros"
import { datalibros } from './mocks/datalibros.json'
import './styles/App.css'


function App() {

  return (
    <>
      <Header />
      <Libros datalibros={datalibros} />
    </>
  )
}

export default App
