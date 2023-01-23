import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import Link from "next/link";
import { useGlobalContext } from "context/context";

const Navbar = () => {
  const { showNavbar, setShowNavbar } = useGlobalContext();

  const closeNavbar = () => {
    setShowNavbar(false);
  };

  return (
    <>
      <nav>
        <Link href='/' className='logo'>
          ChessonChain
        </Link>
        <div className='links'>
          <Link href='/'>Home</Link>
          <Link href='about'>About</Link>
          <Link href='contact'>Contact us</Link>
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
        <Link href='/'>Home</Link>
        <Link href='about'>About</Link>
        <Link href='contact' onClick={closeNavbar}>
          Contact us
        </Link>
        <div className='btns'>
          <a href='#'>
            <button className='green'>Sign in</button>
          </a>
          <a href='#'>Sign up</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
