import React from 'react';

const LembreteLista = () => {
  const lembretes = [
    { id: 1, texto: 'Comprar carne' },
    { id: 2, texto: 'Trocar a lampada do meu quarto' },
    { id: 3, texto: 'Fazer mercado' },
    { id: 4, texto: 'Levar meu cachorro para passear' },
    { id: 5, texto: 'Fazer atividades da faculdade' },
  ];

  return (
    <div>
      {lembretes.map((lembrete) => (
        <div key={lembrete.id}>
          <p>{lembrete.texto}</p>
        </div>
      ))}
    </div>
  );
};

export default LembreteLista;