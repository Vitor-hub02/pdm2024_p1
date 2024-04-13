import React, { useState } from 'react';
import '../style/LembreteEntrada.css';

function LembreteEntrada() {
  const [lembrete, setLembrete] = useState('');

  function handleAddLembrete() {
    const newLembrete = {
        id: Date.now(),
        texto: '',
      };
  
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