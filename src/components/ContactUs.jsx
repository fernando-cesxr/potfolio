import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bxd9oi9', 'template_vyxt9sc', form.current, {
        publicKey: 'Db7TOc5xGOtm4viw_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className='flex flex-col lg:pr-52 pt-10 justify-center items-center'>
        <h2 className='text-2xl lg:text-3xl text-center font-bold'>Send me an Email</h2>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col' >
          <label className='mt-3'>Name</label>
          <input type="text" name="from_name" className='rounded-lg text-black p-1 opacity-50' />
          <label className='mt-3'>Your Email</label>
          <input type="email" name="user_email" className='rounded-lg text-black p-1 opacity-50' />
          <label className='mt-3'>Message</label>
          <textarea name="message" className='rounded-lg text-black p-1 opacity-50' />
          <div className='flex justify-center items-center '>
            <input type="submit" value="Send" className='rounded-lg mt-3 gradiant__bg__button w-20 hover:cursor-pointer mb-5' />
          </div>
        </form>
      </div>

    </>
  );
};