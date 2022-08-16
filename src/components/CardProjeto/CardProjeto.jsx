import React from 'react';
import './CardProjeto.css'

function CardProjeto(props) {
    const tags = props.tags.map(tag => <p className='card--technology'>{tag}</p>)
  
    return (
      <div className="card">
          <img className="card--img" src={props.img} alt="" />
          <h3 className="card--title">{props.title}</h3>
          <div className="card--tags">
              {tags}
              <div className="card--project-type">{props.type}</div>
          </div>
          <p className="card--links">
              <a href={props.url}>{props.demo ? "Visitar Demo" : "Visitar Página"}</a> | {props.github &&<a href="">GitHub</a>}
          </p>
          <p className="card--description">
          {props.description}
          </p>
      </div>
  );
}

export default CardProjeto;