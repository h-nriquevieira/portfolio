import React from 'react';
import './Header.css'

function Header() {
  return (
      <header>
          <div className="container">
              <p className='header--pre-title'>Olá, eu sou</p>
              <h1>Henrique Vieira</h1>
              <h2 className='header--subtitle'>Desenvolvedor Front-End | React</h2>
              <a href="#projetos" className='header--btn'>Confira meu portfólio</a>
          </div>
      </header>
  );
}

export default Header;