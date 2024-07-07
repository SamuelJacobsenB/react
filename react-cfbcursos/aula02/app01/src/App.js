import React,{useState} from "react";
import './css/App.css';

export default function App(){

  // const [log,setLog] = useState(false);

  // const msgLogin =()=>{
  //   return 'Usuário logado';
  // };

  // const msgLogOff =()=>{
  //   return 'Favor logar';
  // };

  // const cumprimento =()=>{
  //   const hora = new Date().getHours();
  //   if(hora >= 0 && hora < 13){
  //     return <p>Bom dia</p>
  //   } else if(hora >= 13 && hora < 18){
  //     return <p>Boa tarde</p>
  //   } else {
  //     return <p>Boa noite</p>
  //   };
  // };

  // {cumprimento()}
  // <p>{log?msgLogin():msgLogOff()}</p>
  // <button onClick={()=>setLog(!log)}>
  //   {log?'Logoff':'Login'}
  // </button>

  const [cor,setCor] = useState(1);

  const vermelho = {color: 'red'};
  const verde = {color: 'green'};
  const azul = {color: 'blue'};

  const retCor =(c)=>{
    if(c==1){
      return vermelho
    } else if(c==2){
      return verde
    } else {
      return azul
    };
  };

  const mudaCor =()=>{
    setCor(cor+1);
    if(cor > 2) {
      setCor(1);
    };
  };

  setInterval(mudaCor,1000);

  return(
    <>
      <h1 style={retCor(cor)}>Aprendendo React</h1>
      {/* <button onClick={()=>mudaCor()}>Mudar cor</button> */}
    </>
  );
};