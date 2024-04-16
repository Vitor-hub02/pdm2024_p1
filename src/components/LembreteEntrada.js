import React, { useState } from 'react';
import '../style/LembreteEntrada.css';

/*Função chamada LembreteEntrada com useState para criar uma variável de estado
lembrete e uma função para atualizar setLembrete */
function LembreteEntrada() {
  const [lembrete, setLembrete] = useState('');

  /*Criamos uma função chamada handleAddLembrete, para criar um novo objetivo chamado
  newLembrete com as seguintes propriedades: id(identificação) e texto(lembrete que será feito) */
  function handleAddLembrete() {
    const newLembrete = {
        id: Date.now(),
        texto: '',
      };
      
      /*setLembrete - atualização de estado
      A função de atualização retorna um novo array, concatenação do array prevLembretes com
      lembrete novo, usando spread.
      spread - elementos sejam copiados para um novo array e então adicionar o novo lembrete no novo array */
      setLembrete((prevLembretes) => [...prevLembretes, newLembrete]);
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