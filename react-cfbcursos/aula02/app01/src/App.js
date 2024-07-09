import React,{useState} from "react";
import './css/App.css';

export default function App(){

  const [form, setForm] = useState({'nome': '','curso': '','ano': ''});
  const handleFormChange=(el)=>{
    if(el.target.getAttribute('name')=='fnome'){
      setForm({'nome':el.target.value,'curso':form.curso,'ano':form.ano})
    } else if(el.target.getAttribute('name')=='fcurso'){
      setForm({'nome':form.nome,'curso':el.target.value,'ano':form.ano})
    } else {
      setForm({'nome':form.nome,'curso':form.curso,'ano':el.target.value})
    }
  };

  return(
    <>
      <label>Nome</label>
      <input type="text" name="fnome" value={form.nome} onChange={(el)=>handleFormChange(el)}/><br/>
      <label>Curso</label>
      <input type="text" name="fcurso" value={form.curso} onChange={(el)=>handleFormChange(el)}/><br/>
      <label>Ano</label>
      <input type="text" name="fano" value={form.ano} onChange={(el)=>handleFormChange(el)}/>
      <p>Nome digitado: {form.nome}</p>
      <p>Curso digitado: {form.curso}</p>
      <p>Ano digitado: {form.ano}</p>
    </>
  );
};