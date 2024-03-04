'use client'
import Heading from './Heading'
import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { LuSendHorizonal } from "react-icons/lu";


const Contact = () => {
  const form = useRef();

  // function handleReset () {
  //   form.current.reset();
  // }
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0u18edj', 'template_z6qzqnr', form.current, 'user_4RjFbc8JgY04ajTt5pnfv')
      .then((result) => {
          toast.success('Thank you! Message sent to Moses Koroma,successfully ❤️.');
      }, (error) => {
          toast.error(error.message);
      });
  };
   
  return (
    <section id='contact'>
        <Heading title='Contact'/>
        <form className=' flex flex-col gap-8' ref={form} onSubmit={sendEmail}>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-8'>
                   <input type='text' placeholder='Name' className='inputstyle' name='from_name' required/>
                   <input type='email' placeholder='Email' className='inputstyle' name='from_email' required/>
            </div>
            <input type='text' placeholder='Subject' className='inputstyle' name='from_subject' required/>
             <textarea rows='6' placeholder='Message' className='inputstyle' name='Message' required></textarea>
             <div>
               <button  type='submit' className=''><LuSendHorizonal size={25}/></button>
             </div>
        </form>
    </section>
  )
}

export default Contact