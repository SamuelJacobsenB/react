import React from "react";
import './css/App.css';

export default function App(){

  const textoDestaque = {
    color: 'blue',
    fontSize: '3em',
    textDecoration: 'underline'
  };

  return(
    <>
      <section className="caixa">
        <h1 style={{color: 'red',fontSize: '5em'}}>CFB Cursos</h1>
        <h2 style={textoDestaque}>Curso de React</h2>
        <p className="texto">Aprendendo React!!!</p>
        <a href="#">Link</a>
      </section>
    </>
  );
};