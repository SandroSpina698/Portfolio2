import React from 'react';
import '../Assets/Styles/Footer.scss'
import ImgReact from "../Assets/Media/react-brands.svg";
import ImgSass from "../Assets/Media/sass-brands.svg";

function Footer() {
  return (
    <div className='footer'>
      <footer>

      <span>Fait avec </span>
      <img src={ImgReact} width="30px" />
      <span>et </span>
      <img src={ImgSass} width='30px' />
      
      </footer>
    </div>);
}

export default Footer;
