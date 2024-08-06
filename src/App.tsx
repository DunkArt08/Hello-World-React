import React from "react";
import Home from "./paginas/home/home"; 
import './App.css';
//import React, { useState } from "react"; 

function App() {
  return(
   
    <div>
    <Home title="Componente Home"  description="Componente Home que recebe props como se fosse um construtor."/>
    </div>
  );
}

export default App;