
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Nav() {


  return (
    <>
      <div className='hidden lg:flex lg:fixed bg-nav place-content-between min-w-full top-0 z-50 text-font'>
        <div className='p-5'>
          <Link to='#home' smooth >Home</Link>
        </div>
        <div className='flex p-5'>
          <Link to='#skills' smooth className='mx-20'>Skills</Link>
          <Link to='#education' smooth className='mx-20'>Education</Link>
          <Link to='#projects' smooth className='mx-20'>Projects</Link>
        </div>
        <div className='p-5'>
          <Link to='#contact' smooth>Contact</Link>
        </div>
      </div>

    </>
  )
}

export default Nav;



