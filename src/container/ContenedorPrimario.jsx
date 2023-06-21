import Selector from "../components/Selector";
import ContenedorSecundario from "./ContenedorSecundario";

export default function ContenedorPrimario({preEntrega, setPreEntrega}) {
  return (
    <>
      <Selector 
        setPreEntrega={setPreEntrega}
      ></Selector>
      <ContenedorSecundario
        preEntrega={preEntrega}
      ></ContenedorSecundario>
    </>

  )
}


