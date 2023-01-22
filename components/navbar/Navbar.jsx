import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <>
      <nav>
        <div className='logo'>ChessonChain</div>
        <div className='links'>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Contact us</a>
        </div>
        <div className='btns'>
          <a href='#'>
            <button className='green'>Sign in</button>
          </a>
          <a href='#'>Sign up</a>
          <div className='display-mode'>
            <FiSun />
          </div>
        </div>
        <div className='hambugger-menu'>
          <div className='display-mode'>
            <FiSun />
          </div>
          {showNavbar ? (
            <FaTimes onClick={() => setShowNavbar(false)} />
          ) : (
            <FaBars onClick={() => setShowNavbar(true)} />
          )}
        </div>
      </nav>
      <div className={`mobile-links ${showNavbar && `show`}`}>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact us</a>
      </div>
    </>
  );
};

export default Navbar;
