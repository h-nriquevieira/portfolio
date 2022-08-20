import React from 'react';
import './Footer.css'
import iconGitHub from '../../assets/icon-github.svg'
import iconLinkedIn from '../../assets/icon-linkedin.svg'

function Footer() {
  return (
      <footer>
          <a href=""><img src={iconGitHub} alt="" /></a>
          <a href=""><img src={iconLinkedIn} alt="" /></a>
      </footer>
  );
}

export default Footer;