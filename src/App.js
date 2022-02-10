import React from 'react';

import { AboutUs, Header, PointsVente, Gallery, EntretenirSesRoses, Varietes } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <PointsVente />
    <Varietes />
    <Gallery />
    <EntretenirSesRoses />
  </div>
);

export default App;
