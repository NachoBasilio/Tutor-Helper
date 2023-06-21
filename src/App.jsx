import { useState } from "react";
import Header from "./components/Header";
import ContenedorPrimario from "./container/ContenedorPrimario";

export default function App() { 
  const [preEntrega, setPreEntrega] = useState([])

  return (
    <>
      <Header></Header>
      <ContenedorPrimario 
        preEntrega={preEntrega}
        setPreEntrega={setPreEntrega}
      ></ContenedorPrimario>
    </>
  )
}
