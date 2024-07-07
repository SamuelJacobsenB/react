import React from "react";
import ledVerde from './imgs/image1.png';
import ledVermelho from './imgs/image2.png';

export default function Led(props){


  return(
    <>
      <img src={props.ligado?ledVerde:ledVermelho} className="img_button"/>
      <button onClick={()=>props.setLigado(!props.ligado)}>
            {props.ligado?'Desligar':'Ligar'} 
      </button>
    </>
  );
};