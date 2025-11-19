import React from 'react'
import footerContact from "../../Api/footerApi.json";
import { MdPlace } from 'react-icons/md';
import { IoCallSharp } from 'react-icons/io5';
import { TbMailPlus } from 'react-icons/tb';

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
    </footer>
  )
}

export default Footer;
