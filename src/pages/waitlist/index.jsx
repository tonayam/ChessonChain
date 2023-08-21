import Image from 'next/image';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { headers } from 'next.config';
import { useGlobalContext } from 'context/context';
import { toast } from 'react-toastify';

const Waitlist = () => {
  const { baseURL } = useGlobalContext();
  const [laoding, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: ``,
      preferredBlockchain: ``,
      projectSuggestion: ``,
    },
    validationSchema: Yup.object({
      email: Yup.string().email(`Invalid email`).required(`Email is required`),
      preferredBlockchain: Yup.string().required(
        `What's your preffered blockchain?`
      ),
    }),
    onSubmit() {
      joinWaitlist();
    },
  });

  const joinWaitlist = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${baseURL}/users/join-waitlist`, {
        method: `POST`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formik.values),
      });
      const data = await response.json();
      if (response.status === 201) {
        toast.success(`Welcome to the waitlist`);
      } else if (
        response.status === 400 &&
        data.msg.includes(`please choose another value`)
      ) {
        toast.error(`Email already on waitlist`);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

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

      <form action='' onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label
            htmlFor='email'
            className={
              formik.errors.email && formik.touched.email ? `error` : ``
            }
          >
            {formik.errors.email && formik.touched.email
              ? formik.errors.email
              : ` Email Address *`}
          </label>
          <input
            type='text'
            id='email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        {/* PREFERRED BLOCKCHAIN */}
        <div className='form-control'>
          <label
            htmlFor='preferredBlockchain'
            className={
              formik.errors.preferredBlockchain &&
              formik.touched.preferredBlockchain
                ? `error`
                : ``
            }
          >
            {formik.errors.preferredBlockchain &&
            formik.touched.preferredBlockchain
              ? formik.errors.preferredBlockchain
              : `Preferred Blockchain *`}
          </label>
          <select
            name='preferredBlockchain'
            id='preferredBlockchain'
            value={formik.values.preferredBlockchain}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option hidden defaultChecked>
              Select Preferred Blockchain
            </option>
            <option value='polkadot'>Polkadot</option>
            <option value='stacks'>Stacks</option>
            <option value='near'>Near</option>
            <option value='solana'>Solana</option>
            <option value='etherium'>Etherium</option>
          </select>
        </div>

        {/* SUGGESTIONS FOR PROJECT */}
        <div className='form-control'>
          <label htmlFor='projectSuggestion'>
            What would you love to see in Chessonchain *
          </label>
          <textarea
            name='projectSuggestion'
            id='projectSuggestion'
            value={formik.values.projectSuggestion}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
        </div>
        <div className='btn'>
          <button
            type='submit'
            className='green'
            disabled={
              formik.errors.email || formik.errors.preferredBlockchain
                ? true
                : false
            }
          >
            SUBMIT{' '}
            {laoding && (
              <Image src='/loading-spinner.svg' width={24} height={24} alt='' />
            )}
          </button>
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
