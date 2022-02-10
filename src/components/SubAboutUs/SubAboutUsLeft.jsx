import React from 'react';
import '../../container/AboutUs/AboutUs.css';

const SubAboutUs = ({ nom, photo, description }) => (
    <div className="app__aboutus flex__center section__padding">
        
        <div className='app__aboutus-content flex__center'>
            
            <div className='app__aboutus-content_left'>
                <div className="app__wrapper_img">
                    <img src={photo} alt="header img" />
                </div>
            </div>

            <div className='app__aboutus-content_right'>
                <h1 className="headtext__cormorant">{nom}</h1>
                <p className="p__opensans">{description}</p>
            </div>

        </div>
        
    </div>
);

export default SubAboutUs;
