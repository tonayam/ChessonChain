import React from "react";

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
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Contact Us</a>
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
