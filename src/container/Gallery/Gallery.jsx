import React, { useRef } from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from "react-icons/bs"
import './Gallery.css';

const Gallery = () => {
  const scrollRef = useRef(null)

  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === "left") {
      current.scrollLeft -= 301
    } else {
      current.scrollLeft += 301
    }
  }

  return (
    <div className='app__gallery flex__center'>
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans p__gallery'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.</p>
        <button className='custom__button'>View More</button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((img, idx) => (
            <div className='app__gallery-images_card flex__center' key={idx}>
              <img src={img} alt={`Image ${idx}`} />
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='app__gallery-arrow_icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='app__gallery-arrow_icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
}
export default Gallery;
