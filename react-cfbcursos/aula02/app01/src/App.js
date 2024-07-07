import React,{useState} from "react";
import Numero from "./componentes/Numero";
import './css/App.css';

export default function App(){

  const [num,setNum] = useState(10);

  return(
    <>
      <p>Valor do state num em App: {num}</p>
      <Numero num={num} setNum={setNum}/>
    </>
  );
};