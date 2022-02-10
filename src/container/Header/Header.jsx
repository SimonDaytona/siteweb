import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id = "home">
    <div className="app__wrapper_info">
      <SubHeading title="Famille VIGOUREUX" />
      <h1 className='app__header-h1'>La passion des roses depuis 1890</h1>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome2} alt="header img"/>
    </div>
  </div>
);

export default Header;
