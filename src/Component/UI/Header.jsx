// Header.jsx
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="container navbar-grid">

        {/* Logo */}
        <h2 style={{ color: "#fff" }}>WorldAtlas</h2>

        {/* Hamburger Icon */}
        <div className="ham-menu" onClick={() => setOpen(!open)}>
          <GiHamburgerMenu />
        </div>

        {/* Nav Links */}
        <nav>
          <ul className={open ? "active" : ""}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/countries">Countries</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
