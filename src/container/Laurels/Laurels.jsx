import React from 'react';
import { SubHeading } from '../../components';

import { images, data } from "../../constants"
import './Laurels.css';

const Laurels = () => (
  <div className='app__laurels section__padding flex__center app__bg' id='awards'>
    <div className='app__laurels-content'>
      <SubHeading title="Awards & Recognition" />
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      <div className='app__laurels-content_container'>
        {data.awards.map((award, idx) => (
          <div className='app__award' key={idx}>
            <img src={award.imgUrl} alt="award" />
            <div className='app__award-content'>
              <h3 className='p__cormorant'>{award.title}</h3>
              <p className='p__opensans'>{award.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className='app__laurels-img'>
      <img src={images.laurels} alt="" />
    </div>
  </div>
);

export default Laurels;
