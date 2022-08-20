import React from 'react';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Projetos from './components/Projetos/Projetos';

function App() {
  return (
    <div className="app">
      <Header />
      <Contato />
      <Projetos />
      <Footer />
    </div>
  );
}

export default App;