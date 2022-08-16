import React from 'react';
import Contato from './components/Contato/Contato';
import Header from './components/Header/Header';
import Projetos from './components/Projetos/Projetos';

function App() {
  return (
    <div className="app">
      <Header />
      <Contato />
      <Projetos />
    </div>
  );
}

export default App;