import './App.css';
import logo from './img/freecodecamp-logo.png';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador';
import { useState } from 'react';


function App() {
  const [numClicks, setnumClicks] = useState(0);
  const manejarClic = () =>{
    setnumClicks(numClicks + 1);
  }
  const reiniciarClic = () =>{
    setnumClicks(0);
  }
  return (
    <div className="App">
      <div className='App-logoContainer'>
        <img className='FreeCodeCamp-Logo'
        src={logo}
        alt='Logo temporal de FreecodeCamp'/>
      </div>
      <div className='App-contadorContainer'>
        <Contador 
        numClicks={numClicks } />
        <Boton 
        name='Click'
        esBotonDeClick={true}
        manejarClic={manejarClic} />
        <Boton 
        name='Reiniciar'
        esBotonDeClick={false}
        manejarClic={reiniciarClic}/>
      </div>
    </div>
  );
}

export default App;