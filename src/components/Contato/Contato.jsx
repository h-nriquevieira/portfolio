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
            <p className="contato--text">GitHub: <a href="https://github.com/h-nriquevieira" className="contato--link">h-nriquevieira</a></p>
            <p className="contato--text">LinkedIn: <a href="https://www.linkedin.com/in/h-nriquevieira/" className="contato--link">Henrique Vieira</a></p>
            <p className="contato--text">E-mail: <a href="mailto:h.nriquevieira@gmail.com" className="contato--link">h-nriquevieira@gmail.com</a></p>
            <p className="contato--text contato--wpp">Se preferir, <a href="https://api.whatsapp.com/send/?phone=%2B5515991441485" className="contato--link">me envie uma mensagem pelo WhatsApp.</a></p>
          </div>
      </section>
  );
}

export default Contato;