import Image from 'next/image';
import React from 'react';

const Waitlist = () => {
  return (
    <main className='waitlist-page'>
      <h3>Join the world of</h3>
      <div className='chessonchain img'>
        <Image src='/chessonchain-block-big.png' alt='chess on chain' fill />
      </div>
      <h3>REGISTER NOW</h3>
      <p>
        “Be among the first set of individuals to play chess on the blockchain!!
        Dont miss out.”
      </p>

      <form action=''>
        <div className='form-control'>
          <label htmlFor='email'>Email Address *</label>
          <input type='text' id='email' />
        </div>
        <div className='form-control'>
          <label htmlFor='preferred-blockchain'>Preferred Blockchain *</label>
          <input type='text' id='preferred-blockchain' />
        </div>
        <div className='form-control'>
          <label htmlFor='expectation'>
            What would you love to see in Chessonchain *
          </label>
          <textarea name='expectation' id='expectation'></textarea>
        </div>
        <div className='btn'>
          <button className='grey'>SUBMIT</button>
        </div>
      </form>
      <div className='lines'>
        <div className='short'></div>
        <div className='long'></div>
      </div>
    </main>
  );
};

export default Waitlist;
