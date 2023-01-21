import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__wrapper section__padding app__bg' id='contacts'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contact" />
      <h1 className='headtext__cormorant'>Find Us</h1>
      <p className='p__opensans' style={{ marginTop: "3rem"}}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
      <p className='p__cormorant' style={{ color: "var(--color-golden)", margin: "2rem 0"}}>Opening Hours</p>
      <p className='p__opensans'>Mon - Fri: 10:00 Am - 02:00 Am</p>
      <p className='p__opensans'>Sat - Sun: 10:00 Am - 03:00 Am</p>
      <button className='custom__button' style={{ marginTop: "2rem"}}>Visit Us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
