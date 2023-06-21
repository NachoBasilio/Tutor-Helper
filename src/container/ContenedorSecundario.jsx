import { useEffect } from "react";
import PreEntregas from "../components/PreEntregas";

export default function ContenedorSecundario({preEntrega}) {

  return (
    <>
    <div>{preEntrega}</div>
    <PreEntregas></PreEntregas>
    </>
  )
}
