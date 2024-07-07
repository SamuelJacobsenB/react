import React,{useState} from "react";
import Led from "./components/Led";
import './css/App.css';

export default function App(){

  const [ligado,setLigado] = useState(false);

  const cancelar =(obj)=>{
    return obj.preventDefault();
  };

  return(
    <>
      <Led ligado={ligado} setLigado={setLigado}/>
      <a href="http://youtube.com/cfbcursos" target="_blank" onClick={el=>cancelar(el)}>
        CFB Cursos
      </a>
    </>
  );
};