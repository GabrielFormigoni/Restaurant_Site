import React, { useState } from 'react';

import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu} from "react-icons/md"
import images from "../../constants/images"
import './Navbar.css';

const NavLinks = () => (
  <>
    <li className='p__opensans'><a href="#home">Home</a></li>
    <li className='p__opensans'><a href="#about">About</a></li>
    <li className='p__opensans'><a href="#menu">Menu</a></li>
    <li className='p__opensans'><a href="#awards">Awards</a></li>
    <li className='p__opensans'><a href="#contacts">Contacts</a></li>
  </>
)
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        <NavLinks />
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>Log in / Register</a>
        <div />
        <a href='/' className='p__opensans'>Book Table</a>
      </div>
      <div className='app__navbar-smallScreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setShowMenu(true)} />

        {showMenu && (
          <div className='app__navbar-smallScreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setShowMenu(false)} />
            <ul className='app__navbar-smallScreen_links'>
              <NavLinks />
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
};

export default Navbar;
