import React from 'react';
import './App.css';
import LembreteEntrada from './components/LembreteEntrada';
import LembreteLista from './components/LembreteLista';


/*define um componente App que renderiza uma lista de lembretes 
e uma entrada de texto para adicionar novos lembretes à lista. */
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <LembreteLista />
          <LembreteEntrada />
        </div>
      </div>
    </div>
  );
}

export default App;
