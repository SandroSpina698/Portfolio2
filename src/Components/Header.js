import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Assets/Styles/Header.scss';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const btn = document.querySelector(".btn-up");

window.addEventListener("scroll", () => {
  var btnscroll = document.querySelector(".btn-up");

  if (window.scrollY > 250) {
    btnscroll.classList.add("scrolled");
  }
  if (window.scrollY < 250) {
    btnscroll.classList.remove("scrolled");
  }
});

function Header() {
    function scrollTotop() {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    // const [isActive, setActive] = useState(false);
    return (
        <div className='header'>
            <div className='left'>
                <div className='logo'>S</div>
                <div className='name-title'>Sandro SPINA</div>
            </div>
            <div className="btn-up" title="remonter la page" onClick={scrollTotop}>
            <FontAwesomeIcon icon='arrow-up'/>
            </div>
            <div className='right'>

                <ul className='list-links'>
                    <li className='link-home'><NavLink to='/'><FontAwesomeIcon icon="home" /></NavLink></li>
                    <li className='link'><NavLink to='/Moi'>Moi</NavLink></li>
                    <li className='link'><NavLink to='/Parcours'>Parcours</NavLink></li>
                    <li className='link'><NavLink to='/Portfolio'>Portfolio</NavLink></li>
                    <li className='link'><NavLink to='/Contact'>Contact</NavLink></li>
                </ul>


            </div>
        </div>

    )
}

export default Header;
