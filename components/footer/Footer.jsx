import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className='grid-box first-box'>
        <h2 className='chessonchain'>ChessOnChain</h2>
        <p>
          Play and earn in an exciting multi-chain NFT chess game for chess and
          blockchain enthusiasts.
        </p>
      </div>
      <div className='grid-box'>
        <h2>Quick Links</h2>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <Link href='contact'>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className='grid-box'>
        <h2>Social Media</h2>
        <ul>
          <li>
            <a href='#'>Discord</a>
          </li>
          <li>
            <a href='#'>Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
