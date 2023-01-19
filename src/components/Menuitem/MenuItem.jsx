import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, description, price}) => (
  <div className='app__menuItem'>
    <div className='app__menuItem-title'>
      <h1 className='p__cormorant'>{title}</h1>
      <div className='app__menuItem-title_price'>
        <div />
        <p className='p__cormorant'>{price}</p>
      </div>
    </div>
    <div className='app__menuItem-description'>
      <p className='p__opensans'>{description}</p>
    </div>
  </div>
);

export default MenuItem;
