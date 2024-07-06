import React from "react";
import Dados from "./Dados";

export default function Corpo(){

    const cnl=()=>{
        return 'CFB Cursos';
    };
    const yt = 'cfbcursos.youtube';
    const crs = 'Curso de React.js';

    const somar =(v1,v2)=>{
        return v1 + v2;
    };

    return(
        <section>
            <h2>Curso de React</h2>
            <p>Se inscreva em nosso canal</p>
            <p>Estudando React</p>
            <Dados 
                canal={cnl}
                youtube={yt}
                curso={crs}
                somar={somar}
            />
        </section>
    );
};