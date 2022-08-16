import React from 'react';
import CardProjeto from '../CardProjeto/CardProjeto';
import './Projetos.css'

function Projetos() {
  return (
    <section className="projetos">
      <div className="container">
        <h3 className="projetos--title">Projetos</h3>
        <CardProjeto />
      </div>
    </section>
  );
}

export default Projetos;