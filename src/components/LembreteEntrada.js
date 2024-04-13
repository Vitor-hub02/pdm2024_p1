import React, { useState } from 'react';

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
    <div>
      <input
        type="text"
        value={lembrete}
        onChange={(e) => setLembrete(e.target.value)}
        placeholder="Digite seu novo lembrete"
      />
      <button type="button" onClick={handleAddLembrete}>
        Adicionar Lembrete
      </button>
    </div>
  );
}

export default LembreteEntrada;