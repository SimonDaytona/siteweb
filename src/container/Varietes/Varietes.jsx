import React from 'react';

import { SubAboutUs, SubAboutUsLeft } from '../../components';
import { images } from '../../constants';
import './Varietes.css';

const Varietes = () => (
    <div id="varietes" className='app__varietes app__bg'>
        
        <h1 className="headtext__title flex__center app__aboutus"><b>Nos variétés</b></h1>

        <SubAboutUs 
            nom="All 4 Love"
            photo={images.all4love}
            description="Lorem ipsum dolor sit amet. Qui dolorem eos consequatur deleniti et ipsa enim et consequatur aliquid est illo laborum et temporibus accusantium? Et deleniti corrupti et voluptatibus vero et veniam impedit id autem reprehenderit hic repellat atque. Aut quidem animi rem fuga voluptatem a dicta porro eos eaque quas aut galisum aliquam. Ea nemo nesciunt ut voluptas omnis et sint recusandae nam cumque ipsam."
        />

        <SubAboutUsLeft 
            nom="Red Naomie"
            photo={images.rednaomie}
            description="Lorem ipsum dolor sit amet. Qui dolorem eos consequatur deleniti et ipsa enim et consequatur aliquid est illo laborum et temporibus accusantium? Et deleniti corrupti et voluptatibus vero et veniam impedit id autem reprehenderit hic repellat atque. Aut quidem animi rem fuga voluptatem a dicta porro eos eaque quas aut galisum aliquam. Ea nemo nesciunt ut voluptas omnis et sint recusandae nam cumque ipsam."
        />

    </div>
);

export default Varietes;
