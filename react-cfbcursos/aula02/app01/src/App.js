import React from "react";
import './css/App.css';

export default function App(){

  const carros = [
    {categoria: 'Utilitário', preco: '100000.00', modelo: 'Hillux'},
    {categoria: 'Esportivo', preco: '180000.00', modelo: 'Golf GTI'},
    {categoria: 'Utilitário', preco: '80000.00', modelo: 'RAM'},
    {categoria: 'SUV', preco: '75000.00', modelo: 'T-Cross'},
    {categoria: 'Esportivo', preco: '359000.00', modelo: 'Camaro'},
    {categoria: 'Utilitário', preco: '55000.00', modelo: 'Fiat-Uno'}
  ];

  const listaCarros = carros.map( 
    (el, i)=>
       <li>
        <h3>Modelo: {el.modelo}</h3>
        <p>Categoria: {el.categoria}</p>
        <strong>Preço: {el.preco}</strong>
        <hr/>
       </li> 
  );

  return(
    <>
      <h1>Carros:</h1>
      <ul>
        {listaCarros}
      </ul>
    </>
  );
};