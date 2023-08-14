import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <h4 className='chessonchain'>Support | Chessonchain © 2023 | About</h4>
      <div className='socials'>
        <a href='' target='_blank' rel='noreferrer'>
          <Image
            src='/twitter-logo.svg'
            alt='twitter link'
            width={35}
            height={34}
          />
        </a>
        <a href='' target='_blank' rel='noreferrer'>
          <Image
            src='/discord-logo.svg'
            alt='discord link'
            width={50}
            height={48}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
