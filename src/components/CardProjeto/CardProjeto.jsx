import React from 'react';
import './CardProjeto.css'

function CardProjeto() {
  return (
      <div className="card">
          <img className="card--img" src="/project-1.png" alt="" />
          <h3 className="card--title">AutoOn</h3>
          <div className="card--tags">
              <p className="card--technology">React</p>
              <div className="card--project-type">Projeto de estudo</div>
          </div>
          <p className="card--links">
              <a href="">Visitar Demo</a> | <a href="">GitHub</a>
          </p>
          <p className="card--description">
          Projeto fictício de concessionária de veículos feito em React. Cada veículo recebe um card gerado dinamicamente, mapeando os dados recebidos em JSON e gerando um novo componente para cada entrada. Inicialmente, foi utilizado um JSON fictício. O próximo passo é implementar um banco de dados real.
          </p>
      </div>
  );
}

export default CardProjeto;