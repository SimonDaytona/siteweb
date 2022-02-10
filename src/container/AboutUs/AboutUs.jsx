import React from 'react';

import { SubAboutUs, SubAboutUsLeft } from '../../components';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div id="about">

    <h1 className="headtext__title flex__center app__aboutus"><b>Qui sommes-nous ?</b></h1>

    <SubAboutUsLeft
      nom="Simon"
      photo={images.simon}
      description="Lorem ipsum dolor sit amet. Qui dolorem eos consequatur deleniti et ipsa enim et consequatur aliquid est illo laborum et temporibus accusantium? Et deleniti corrupti et voluptatibus vero et veniam impedit id autem reprehenderit hic repellat atque. Aut quidem animi rem fuga voluptatem a dicta porro eos eaque quas aut galisum aliquam. Ea nemo nesciunt ut voluptas omnis et sint recusandae nam cumque ipsam. "
    />

    <SubAboutUs
      nom="Matthieu"
      photo={images.Matt}
      description="Lorem ipsum dolor sit amet. Qui dolorem eos consequatur deleniti et ipsa enim et consequatur aliquid est illo laborum et temporibus accusantium? Et deleniti corrupti et voluptatibus vero et veniam impedit id autem reprehenderit hic repellat atque. Aut quidem animi rem fuga voluptatem a dicta porro eos eaque quas aut galisum aliquam. Ea nemo nesciunt ut voluptas omnis et sint recusandae nam cumque ipsam. "
    />

  </div>
);

export default AboutUs;
