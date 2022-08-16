import React from 'react';
import CardProjeto from '../CardProjeto/CardProjeto';
import projects from '../../projects-data.json'
import './Projetos.css'

function Projetos() {
  const projectCards = projects.map(project => (
    <CardProjeto 
      title={project.title}
      img={project.img}
      tags={project.tags}
      type={project.type}
      demo={project.demo}
      url={project.url}
      github={project.github}
      description={project.description}
    />
  ))

  return (
    <section className="projetos">
      <div className="container">
        <h3 className="projetos--title">Projetos</h3>
        {projectCards}
      </div>
    </section>
  );
}

export default Projetos;