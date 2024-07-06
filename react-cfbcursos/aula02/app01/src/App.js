import React from "react";
import Logo from './componentes/imgs/logo.png';

export default function App(){
  const canal=()=>{
    return 'CFB cursos';
  };
  const curso = 'Curso de React';

  return(
    <section>
      <header>
        <p>Canal: {canal()}</p>
        <p>{curso}</p>
      </header>
      <section>
        <img src={Logo}/>
        <img src="./imgs/logo.png"/>
      </section>
    </section>
  );
};