import React from "react";
import './styles/App.css'
import {Libros} from "./components/Libros"
import {datalibros} from './mocks/librosconid.json'


function App() {

  return (
    <Libros datalibros={datalibros} />
  )
}

export default App
