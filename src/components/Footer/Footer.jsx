import React from 'react';
import './Footer.css'
import iconGitHub from '../../assets/icon-github.svg'
import iconLinkedIn from '../../assets/icon-linkedin.svg'

function Footer() {
  return (
      <footer>
          <a href="https://github.com/h-nriquevieira"><img src={iconGitHub} alt="" /></a>
          <a href="https://www.linkedin.com/in/h-nriquevieira/"><img src={iconLinkedIn} alt="" /></a>
      </footer>
  );
}

export default Footer;