import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper-info'>
      <SubHeading title="Chase The New Flavour" />
      <h1 className='app__header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans app__header-p'>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper-img'>
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
