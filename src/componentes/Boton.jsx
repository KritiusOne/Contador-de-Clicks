import React from "react";
import '../STYLE-SHEET/buttons.css';

function Boton({name, esBotonDeClick, manejarClic}){
  return(
    <button
    className={ esBotonDeClick ? "boton-Click" : "boton-Reiniciar" } 
    onClick={manejarClic}>
      {name}
    </button>
  );
}

export default Boton;