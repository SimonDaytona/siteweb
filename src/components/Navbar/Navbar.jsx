import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import { MdOutlineExpandLess } from 'react-icons/md';
import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false);

  return(
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.lcdroses} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Acceuil</a></li>
        <li className="p__opensans"><a href="#about">Qui sommes-nous ?</a></li>
        <li className="p__opensans"><a href="#pointsvente">Points de vente</a></li>
        <li className="p__opensans"><a href="#varietes">Nos Variétés</a></li>
        <li className="p__opensans"><a href="#entretien">Prendre soin de ses roses</a></li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineExpandLess fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans"><a href="#home">Acceuil</a></li>
              <li className="p__opensans"><a href="#about">Qui sommes-nous ?</a></li>
              <li className="p__opensans"><a href="#pointsvente">Points de vente</a></li>
              <li className="p__opensans"><a href="#varietes">Nos Variétés</a></li>
              <li className="p__opensans"><a href="#entretien">Prendre soin de ses roses</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
};

export default Navbar;
