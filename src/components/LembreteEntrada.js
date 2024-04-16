import React, { useState } from 'react';
import '../style/LembreteEntrada.css';

/*Função chamada LembreteEntrada com useState para criar uma variável de estado
lembrete e uma função para atualizar setLembrete */
function LembreteEntrada({addLembreteCallback}) {
  const [lembrete, setLembrete] = useState('');

  /*Criamos uma função chamada handleAddLembrete, para criar um novo objetivo chamado
  newLembrete com as seguintes propriedades: id(identificação) e texto(lembrete que será feito) */
  function handleAddLembrete() {
    const newLembrete = {
      id: Date.now(),
      texto: '',
    };
    
    /* atualiza o estado de lembretes adicionando um novo lembrete à lista existente, chama uma função 
    para adicionar o lembrete à lista em algum lugar, e limpa o campo de entrada de lembretes, 
    ficando com a string vazia. */
    setLembrete((prevLembretes) => [...prevLembretes, newLembrete]);
    addLembreteCallback(lembrete);
    setLembrete('');
  }

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          value={lembrete}
          onChange={(e) => setLembrete(e.target.value)}
          placeholder="Digite seu novo lembrete"
          className="input"
        />
      </div>
      <button type="button" onClick={handleAddLembrete} className="add-button">
        Adicionar Lembrete
      </button>
    </div>
  );
}

export default LembreteEntrada;