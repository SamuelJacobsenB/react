import React,{useState} from "react";
import './css/App.css';

export default function App(){

  const [carro, setCarro] = useState('HRV');

  return(
    <>
      <label>Selecione um carro: </label>
      <select value={carro} onChange={(e)=>setCarro(e.target.value)}>
        <option value='HRV'>HRV</option>
        <option value='Golf'>Golf</option>
        <option value='RAM'>RAM</option>
        <option value='HB20'>HB20</option>
      </select>
      <p>Carro selecionado: {carro}</p>
    </>
  );
};