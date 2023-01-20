import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app__chef section__padding app__bg'>
    <div className='app__chef-img'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__chef-content'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content_text'>
        <div className='app__chef-content_text-quote'>
          <img src={images.quote} alt="" />
          <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit.</p>
        </div>
        <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>

      <div className='app__chef-content_sign'>
        <h3 className='p__cormorant'>Kevin Luo</h3>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default Chef;
