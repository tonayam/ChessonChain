import React from 'react';
import Link from 'next/link';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const Contact = () => {
  return (
    <main className='contact'>
      <div className='text'>
        <h1>Have an inquiry?</h1>
        <p>Ask us anything you want to know</p>
      </div>
      <form action=''>
        <div className='inputs'>
          <div className='form-control'>
            <label htmlFor='name'>Name</label>
            <br />
            <input type='text' />
          </div>

          <div className='form-control email'>
            <label htmlFor='email'>Email</label>
            <br />
            <input type='email' />
          </div>
        </div>

        <div className='form-control'>
          <label htmlFor='message'>Message</label>
          <textarea name='message' id='message'></textarea>
        </div>
        <button className='green' type='submit'>
          Send Message
        </button>
      </form>
    </main>
  );
};

export default Contact;
