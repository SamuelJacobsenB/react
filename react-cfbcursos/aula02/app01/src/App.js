import React,{useState} from "react";
import Nota from "./components/Nota";
import Resultado from "./components/Resultado";
import './css/App.css';

export default function App(){



  const [notas,setNotas] = useState({nota1:0,nota2:0,nota3:0,nota4:0})
  const handleChangeNotas=(el)=>{
    alert(el)
    if(el.target.id == 'nt1'){
      setNotas({nota1:el.target.value,nota2:notas.nota2,nota3:notas.nota3,nota4:notas.nota4});
    } else if(el.target.id == 'nt2'){
      setNotas({nota1:notas.nota1,nota2:el.target.value,nota3:notas.nota3,nota4:notas.nota4});
    } else if(el.target.id == 'nt3'){
      setNotas({nota1:notas.nota1,nota2:notas.nota2,nota3:el.target.value,nota4:notas.nota4});
    } else {
      setNotas({nota1:notas.nota1,nota2:notas.nota2,nota3:notas.nota3,nota4:el.target.value});
    }
  };

  return(
    <>
      <Nota id='nt1' num={1} nota={notas.nota1} setNota={(el)=>handleChangeNotas(el)}/>
      <Nota id='nt2' num={2} nota={notas.nota2} setNota={(el)=>handleChangeNotas(el)}/>
      <Nota id='nt3' num={3} nota={notas.nota3} setNota={(el)=>handleChangeNotas(el)}/>
      <Nota id='nt4' num={4} nota={notas.nota4} setNota={(el)=>handleChangeNotas(el)}/>
      <Resultado somaNotas={parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4)}/>
    </>
  );
};