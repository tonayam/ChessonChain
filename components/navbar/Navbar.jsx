import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useGlobalContext } from 'context/context';
import Image from 'next/image';

const Navbar = () => {
  const { showNavbar, setShowNavbar } = useGlobalContext();

  const closeNavbar = () => {
    setShowNavbar(false);
  };

  return (
    <>
      <nav>
        <Link href='/' className='logo'>
          <Image
            src='/logo.png'
            alt='company logo'
            fill
            sizes='(max-width: 768px) 10px, (max-width: 1200px) 18px'
          />
        </Link>
        <div className='hamburger'>
          {showNavbar ? (
            <FaTimes onClick={() => setShowNavbar(false)} />
          ) : (
            <FaBars onClick={() => setShowNavbar(true)} />
          )}
        </div>
        <div className='links'>
          <Link href='/'>Game</Link>
          <Link href='/nfts'>NFTs</Link>
          <Link href='about'>About</Link>
          <Link href='contact'>Support</Link>
        </div>

        <div className='socials-waitlist'>
          <a
            href='https://twitter.com/ChessOnChain'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/twitter-logo.svg'
              alt='twitter link'
              width={35}
              height={34}
            />
          </a>
          <a
            href='https://discord.com/invite/PDrGaJNCe3'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/discord-logo.svg'
              alt='discord link'
              width={50}
              height={48}
            />
          </a>
          <div className='social'></div>
          <button className='green'>
            <Link href='/waitlist'>Join waitlist</Link>
          </button>
        </div>
      </nav>

      <div className={`mobile-links ${showNavbar && `show`}`}>
        <Link href='/' onClick={closeNavbar}>
          Game
        </Link>
        <Link href='/nfts' onClick={closeNavbar}>
          NFTs
        </Link>
        <Link href='/about' onClick={closeNavbar}>
          About
        </Link>
        <Link href='contact' onClick={closeNavbar}>
          Support
        </Link>
        <div className='socials-waitlist'>
          <div className='socials'>
            <a
              href='https://twitter.com/ChessOnChain'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                src='/twitter-logo.svg'
                alt='twitter link'
                width={35}
                height={34}
              />
            </a>
            <a
              href='https://discord.com/invite/PDrGaJNCe3'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                src='/discord-logo.svg'
                alt='discord link'
                width={50}
                height={48}
              />
            </a>
          </div>
          <div className='social'></div>
          <button className='green' onClick={() => setShowNavbar(false)}>
            <Link href='/waitlist'>Join waitlist</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
