import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/image-removebg-preview.png'

function Nav() {


  return (
    <>
      <div className='hidden gradiant__bg_nav lg:flex lg:fixed min-w-full top-0 z-50 text-font fixed left-0 w-full'>
        <div className='p-5 flex'>
          <Link to='#home' smooth><img src={logo} className='h-10 w-60 ml-5 hover:font-bold hover:mt-1' /></Link>
        </div>
        <div className='flex p-5 mx-auto'>
          <Link to='#skills' smooth className='mx-10 mt-5 hover:font-bold hover:py-1'>Skills</Link>
          <Link to='#education' smooth className='mx-10 mt-5 hover:font-bold hover:py-1'>Education</Link>
          <Link to='#projects' smooth className='mx-10 mt-5 hover:font-bold hover:py-1'>Projects</Link>
        </div>
        <div className='p-5 m-5 hover:font-bold hover:py-6'>
          <Link to='#contact' smooth className='gradiant__bg__button p-3 rounded-2xl text-font bl'>Contact</Link>
        </div>
      </div>

    </>
  )
}

export default Nav;



