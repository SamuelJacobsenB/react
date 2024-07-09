import React from "react";

export default function Nota(props){
    return(
        <div>
            <label>Informe a nota {props.num}:</label>
            <br/>
            <input type="text" name="" value={props.nota} onChange={(el)=>props.setNota(el.target.value)}/>
            <hr/>
        </div>
    );
};