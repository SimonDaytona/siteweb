import React from 'react';

import { images } from '../../constants';

const SubPointsVente = ({ place1, place2, description1, description2 }) => (
    <div className="app__pointsvente app__bg flex__center section__padding">

        <div className='app__pointsvente-content flex__center'>
            <div className='app__pointsvente-content_left'>
                <h1 className="headtext__cormorant">{place1}</h1>
                <img src={images.rose2} alt='spoon' className='spoon__img' />
                <p className="p__opensans">{description1}</p>
            </div>

            <div className='app__pointsvente-content_right'>
                <h1 className="headtext__cormorant">{place2}</h1>
                <img src={images.rose2} alt='spoon' className='spoon__imgr' />
                <p className="p__opensans">{description2}</p>
            </div>
        </div>

    </div>
);

export default SubPointsVente;
