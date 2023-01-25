import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";
import Link from "next/link";
import { useGlobalContext } from "context/context";

const Navbar = () => {
  const { showNavbar, setShowNavbar, lightMode, setLightMode } =
    useGlobalContext();

  const closeNavbar = () => {
    setShowNavbar(false);
  };

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add(`light-mode`);
    } else {
      document.body.classList.remove(`light-mode`);
    }
  }, [lightMode]);

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
            {lightMode ? (
              <BsMoonStars onClick={() => setLightMode(false)} />
            ) : (
              <FiSun onClick={() => setLightMode(true)} />
            )}
          </div>
        </div>
        <div className='hambugger-menu'>
          <div className='display-mode'>
            {lightMode ? (
              <BsMoonStars onClick={() => setLightMode(false)} />
            ) : (
              <FiSun onClick={() => setLightMode(true)} />
            )}
          </div>
          {showNavbar ? (
            <FaTimes onClick={() => setShowNavbar(false)} />
          ) : (
            <FaBars onClick={() => setShowNavbar(true)} />
          )}
        </div>
      </nav>

      <div className={`mobile-links ${showNavbar && `show`}`}>
        <Link href='/' onClick={closeNavbar}>
          Home
        </Link>
        <Link href='about' onClick={closeNavbar}>
          About
        </Link>
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
