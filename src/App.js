import React, { useState } from 'react';
import './App.css';
import LembreteEntrada from './components/LembreteEntrada';
import LembreteLista from './components/LembreteLista';

function App() {
  // [state, setter do state]
  const [lembretes, setLembretes] = useState([]);
  
  /*Esta função adiciona um novo item à lembretesvariável de estado com um único ide a lembrete string 
  como sua texto propriedade, desde que lembrete não seja uma string vazia. */
  function addLembreteCallback(lembrete) {
    if (lembrete.trim() !== "") {
      // Ternário: se o array "lembretes" estiver vazio, o id do lembrete a entrar é 1, se não, é o id do ultimo + 1
      const idDoUltimoLembrete = lembretes.length == 0 ? 1 : lembretes[lembretes.length - 1].id;
      setLembretes([...lembretes, { id: idDoUltimoLembrete + 1, texto: lembrete }]);
    }
  }

  /*renderiza uma lista de lembretes e uma entrada de lembrete para adicionar novos lembretes à lista. */
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <LembreteLista lembretes={lembretes} />
          <LembreteEntrada addLembreteCallback={addLembreteCallback} />
        </div>
      </div>
    </div>
  );
}

export default App;
