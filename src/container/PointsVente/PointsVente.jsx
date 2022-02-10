import React from 'react';

import { SubPointsVente } from '../../components';
import './PointsVente.css';

const PointsVente = () => (
    <div id="pointsvente">
        <SubPointsVente
            place1="Dupleix"
            place2="Raspail"
            description1="Nous sommes présents sur le marché de Dupleix le dimanche matin à l'adresse suivante : 75 Boulevard de Grenelle, 75015 Paris"
            description2="Nous sommes présents sur le marché de Raspail le dimanche matin à l'adresse suivante : 77 Boulevard de Raspail, 75007 Paris"
        />

        <SubPointsVente 
            place1="Batignolles" 
            place2="Saxe"
            description1="Nous sommes présents sur le marché de Batignolles le samedi matin à l'adresse suivante :"
            description2="Nous sommes présents sur le marché de Saxe le samedi matin à l'adresse suivante :"
        />
    </div>
);

export default PointsVente;