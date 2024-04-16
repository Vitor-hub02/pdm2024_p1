import React from 'react';
import '../style/LembreteEntrada.css';

const LembreteLista = ({lembretes}) => {
  /*Renderiza uma lista de lembretes usando a sintaxe map para atribuir
  uma chave única a cada elemento da lista */
  return (
    <div className="container">
      {lembretes.map((lembrete) => (
        <div key={lembrete.id} className="lembrete-item">
          <p>{lembrete.texto}</p>
        </div>
      ))}
    </div>
  );
};

export default LembreteLista;