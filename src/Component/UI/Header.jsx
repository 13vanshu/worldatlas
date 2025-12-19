import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

import '../UI/Header.css';

const Header = () => {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <header>
        <div className='container'>
          <div className='navbar-grid'>

            <div className='Logo'>
              <NavLink to="/">
                <h1>World Atlas</h1>
              </NavLink>
            </div>

            <div className='ham-menu' onClick={() => setOpen(!open)}>
              <GiHamburgerMenu />
            </div>

            <nav>
              <ul className={open ? "nav-open" : ""}>
                <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
                <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
                <li><NavLink to="/country" onClick={() => setOpen(false)}>Country</NavLink></li>
                <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li>
              </ul>
            </nav>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
