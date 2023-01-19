import React from 'react';
import { MenuItem, SubHeading } from '../../components';

import { images, data } from "../../constants"
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__menu flex__center section__padding' id='menu'>
    <div className='app__menu-header'>
      <SubHeading title="Menu That Fits Your Palatte"/>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>
    <div className='app__menu-content'>
      <div className='app__menu-content_left'>
        <h1 className='app__menu-content_left-h1'>Wine & Beer</h1>
        {data.wines.map((wine, idx) => (
          <MenuItem title={wine.title} description={wine.tags} price={wine.price} key={idx}/>
        ))}
      </div>
      <div className='app__menu-content_img'>
        <img src={images.menu} alt="" />
      </div>
      <div className='app__menu-content_right'>
        <h1 className='app__menu-content_right-h1'>Cocktails</h1>
        {data.cocktails.map((cocktail, idx) => (
          <MenuItem title={cocktail.title} description={cocktail.tags} price={cocktail.price} key={idx}/>
        ))}
      </div>
    </div>
    <button className='custom__button'>View More</button>
  </div>
);

export default SpecialMenu;
