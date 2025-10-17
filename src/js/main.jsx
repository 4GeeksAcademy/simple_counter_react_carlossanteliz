import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Counter from './components/Counter';

let root = ReactDOM.createRoot(document.getElementById('root'));

let contador = 0;

setInterval(() => {
  let six = Math.floor((contador / 100000) % 10);
  let five = Math.floor((contador / 10000) % 10);
  let four = Math.floor((contador / 1000) % 10);
  let three = Math.floor((contador / 100) % 10);
  let two = Math.floor((contador / 10) % 10);
  let one = Math.floor((contador / 1) % 10);


  contador++;

  root.render(
  <React.StrictMode>
    
    <Counter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />
  </React.StrictMode>,
)



}, 1000);

root.render(
  <React.StrictMode>
    <Home/>
    <Counter digitOne={one} digitTwo={two} />
  </React.StrictMode>,
)
