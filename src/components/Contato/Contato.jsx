import React from 'react';
import './Contato.css'

function Contato() {
  return (
      <section className="contato">
          <div className="container">
            <h3 className='contato--title'>Contato</h3>
            <p className="contato--text">
                Você pode me encontrar pelos links abaixo:
            </p>
            <p className="contato--text">GitHub: <a href="" className="contato--link">h-nriquevieira</a></p>
            <p className="contato--text">LinkedIn: <a href="" className="contato--link">Henrique Vieira</a></p>
            <p className="contato--text">E-mail: <a href="" className="contato--link">h-nriquevieira@gmail.com</a></p>
            <p className="contato--text contato--wpp">Se preferir, <a href="" className="contato--link">me envie uma mensagem pelo WhatsApp.</a></p>
          </div>
      </section>
  );
}

export default Contato;