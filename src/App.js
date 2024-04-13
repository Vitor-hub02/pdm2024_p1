import React from 'react';
import './App.css';
import LembreteEntrada from './components/LembreteEntrada';
import LembreteLista from './components/LembreteLista';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Hello, Reminders!</h1>
          <LembreteLista />
          <LembreteEntrada />
        </div>
      </div>
    </div>
  );
}

export default App;
