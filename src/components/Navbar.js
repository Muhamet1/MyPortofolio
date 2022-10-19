import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { useHref} from 'react-router-dom';
import {Link} from 'react-scroll'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth',duration:'500'});
  }, []);

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth',duration:"500"},{closeMobileMenu});
        }}  className='navbar-logo'>
            MY PORTOFOLIO
            <i class='fa-solid fa-briefcase' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link  onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth',duration:"500"},{closeMobileMenu});
        }}  className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='about' smooth={true} duration={500}  className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='skills' smooth={true} duration={500}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Skills
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='projects' smooth={true} duration={500}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to='contact' smooth={true} duration={500}
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Get Started
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Contact Me</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;