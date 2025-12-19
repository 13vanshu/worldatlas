import React from 'react'
import footerContact from "../../Api/footerApi.json";
import { MdPlace } from 'react-icons/md';
import { IoCallSharp } from 'react-icons/io5';
import { TbMailPlus } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

import '../UI/Footer.css';

const Footer = () => {

  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />
  };

  return (
    <footer className='footer-section'>
      <div className='container grid grid-Three-cols'>
        {
          footerContact.map((curData, index) => (
            <div className='footer-contact' key={index}>
              <div className='icon'>{footerIcon[curData.icon]}</div>
              <div className='footer-contact-text'>
                <p>{curData.title}</p>
                <p>{curData.details}</p>
              </div>
            </div>
          ))
        }
      </div>
      <br/>
      <div className='copyright-area'>
          <div className='grid grid-two-cols'>
            <div className='copyright-text'>
              <p>
                Copyright &copy; 2025,All Right Reserved
                <NavLink to="https://www.linkedin.com/in/vansh-arora-b2a485346" target='_blank'>
                  <span> Vansh Arora</span>
                </NavLink>
              </p>
            </div>
            <div className='footer-menu'>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="https://www.linkedin.com/in/vansh-arora-b2a485346" target='_blank'>About</NavLink></li>
                <li><NavLink to="https://github.com/13vanshu/worldatlas.git" target='_blank'>Source code</NavLink></li>
                <li><NavLink to="https://wa.me/6280266561" target='_blank'>Contact</NavLink></li>
              </ul>
            </div>
          </div>
      </div>
    
    </footer>
  )
}

export default Footer;
