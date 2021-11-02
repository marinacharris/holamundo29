//import logo from './logo.svg';
import './App.css';
/* EJEMPLOS VARIOS
function aleatrorio(){
  return Math.trunc(Math.random()*10)
}
function mensaje(titulo){
  return (<h2>{titulo}</h2>);
}

function App() {
  var profesion = 'Maestro'
  const persona = {
    nombre: 'Carlos',
    id: 123456789
  }
  var emails = [
    'https://login.yahoo.com/','https://mail.google.com/'
  ]
  return ( //sintaxis JSX JavaScript XML
    <div>
      <h1>Hola mundo</h1>
      <p>La persona seleccionada es un {profesion} </p>
      <p>Su nombre es {persona.nombre} y su Id es {persona.id}</p>
      <p>Se le asigno una clave aleatoria:</p>
      {aleatrorio()}
      <br/>
      <a href={emails[0]}>Yahoo Mail</a><br/>
      <a href={emails[1]}>Google Mail</a><br/>
      {mensaje('Hola Mundo prueba')}
    </div>
  );
}
*/

/*eventos con react
function App(){
  return(
    <div>
      <form onSubmit={sumar}>
        <p>Ingrese el primer número: <input type='number' name = 'valor1'></input></p>
        <p>Ingrese el segundo número: <input type='number' name= 'valor2'></input></p>
        <p><input type='submit' value = 'Sumar'></input></p>
      </form>
    </div>

  );
}

function sumar(e){
  e.preventDefault();
  var v1 = parseInt(e.target.valor1.value, 10);
  var v2 = parseInt(e.target.valor2.value, 10);
  var suma = v1 + v2;
  alert("La suma es: " +suma);
}
*/
/*
// Actualización de la página - Hook de estado
import {useState} from 'react';

function App(){
  function aleatorio(){
    var numeroR =  Math.trunc(Math.random()*10)
    setNumero(numeroR)
  }

  //numero es la variable de estado
  //setNumero es la función que permite actualizar la variable de estado
  const [numero, setNumero] = useState(0); 
  return(
    <div>
      <p>Número aleatorio {numero}</p>
      <button onClick={aleatorio}>Juega</button>

    </div>
  )
}*/

/*
//componenete

import Dado from './Dado'
function App(){
  var num1 = Math.trunc(Math.random()*6)+1;
  var num2 = Math.trunc(Math.random()*6)+1;
  var num3 = Math.trunc(Math.random()*6)+1;

  return(
    <div>
      <Dado valor={num1}/>
      <Dado valor={num2}/>
      <Dado valor={num3}/>

    </div>
  )
}
*/
/* componente con hook de estado
import Dado from './Dado'
import {useState} from 'react';
function App(){
  function aleatorio(){
      return Math.trunc(Math.random()*6)+1;
  }
  function jugar(){
    setNum1(aleatorio());
    setNum2(aleatorio());
    setNum3(aleatorio());
  }
  var [num1, setNum1] = useState(aleatorio());
  var [num2, setNum2] = useState(aleatorio());
  var [num3, setNum3] = useState(aleatorio());
  return(
    <div>
      <Dado valor={num1}/>
      <Dado valor={num2}/>
      <Dado valor={num3}/>
      <button onClick={jugar}>
        JUGAR
      </button>
      
    </div>
  )
}*/

/*
//eventos generados por componente

import ListaResultados from './ListaResultados';
import FormularioNumeros from './FormularioNumeros';
import {useState} from 'react';

function App(){
  const [operaciones, setOperacion] = useState([])

  function sumar(event){
    event.preventDefault();
    var v1 = parseInt(event.target.valor1.value, 10);
    var v2 = parseInt(event.target.valor2.value, 10);
    var suma = v1 + v2;
    const nuevo = {
      resultado: suma,
      valor1: v1,
      valor2: v2
    }
    setOperacion([...operaciones, nuevo])
    event.target.valor1.value = '';
    event.target.valor2.value = '';

  }
  return(
    <div>
     
      <FormularioNumeros onSumar={sumar}/>
      <ListaResultados resultados = {operaciones}/>
    </div>
  )
}

*/
/*
//hooks de efectos
//cambiar en tiempo real el titulo de la pagina
import {useEffect, useState} from 'react';

function App(){
  const [texto, setTexto] = useState("");
  useEffect(()=>document.title = texto, [texto]);
  function cambiar(e){
    setTexto(e.target.value);
  }

  return(
    <div>
      <p><input type= "text" onChange={cambiar} /></p>
      <p>{texto}</p>

    </div>
  )
}
*/

//mostrar en tiempo real las coordenadas del mouse

import {useState} from 'react';
import CoordenadaPuntero from './CoordenadaPuntero';

function App(){
  const [mostrar, setMostrar] = useState(true)
  function ocultar(){
    setMostrar(false)
  }
  return(
    <div>
        {mostrar ? <CoordenadaPuntero/>: <p>Coordenadas ocultas</p>}
        <button onClick={ocultar}>Ocultar</button>
    </div>
  )
}


export default App;
