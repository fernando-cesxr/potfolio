import email from '../images/email.png'
import wpp from '../images/whatsapp.png'
import linkedin from '../images/linkedin-removebg-preview.png'
import { ContactUs } from './ContactUs';

function Contact() {
  return (
    <>
      <h2 id="contact" className='text-center mt-10 font-bold text-font text-4xl'>Contact</h2>
      <div className="flex place-content-center text-font lg:p-5 lg:flex-row flex-col">
        <div className="mt-5 lg:ml-52 flex flex-col p-5 lg:mx-52">
          <h2 className="text-2xl lg:text-3xl text-center font-bold">Drop me a message</h2>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cesarfernandocarlos@gmail.com" target='_blank' className='flex mt-10 items-center'>
            <img src={email} className='h-10 w-12 mr-3 gradiant__bg__button p-1 rounded-lg' />
            <p>cesarfernandocarlos@gmail.com</p>

          </a>
          <a href='https://api.whatsapp.com/send?phone=5511981993816' target='_blank'>
            <div className='flex items-center'>
              <img src={wpp} className='h-10 w-12 mr-3 gradiant__bg__button p-1 rounded-lg mt-2' />
              <p className="lg:text-xl sm:text-lg mt-3">+55 11981993816</p>
            </div>
          </a>
          <a href='https://www.linkedin.com/in/fernando-cesar-carlos/' target='_blank' className='flex'>
            <img src={linkedin} className='h-10 w-12 mr-3 gradiant__bg__button p-1 rounded-lg mt-2' />
            <div className='flex items-center mt-3'>
              <p>Linkedin</p>
            </div>
          </a>
        </div>
        <div>
          <ContactUs />
        </div>
      </div>
    </>
  )
}

export default Contact;