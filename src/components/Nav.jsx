import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/image-removebg-preview.png'

function Nav() {

  const scrollWithOffset = (el) => {
    const yOffset = (window.innerHeight - el.getBoundingClientRect().height) / 3;
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
  };

  return (
    <>
      <div className='hidden lg:flex lg:fixed min-w-full top-0 z-50 text-font fixed left-0 w-full bg-bd-color h-16 lg:justify-center lg:items-center '>
        <div className='p-5 flex  lg:justify-center lg:items-center'>
          <Link to='#home' smooth><img src={logo} className='h-10 w-60 ml-5 hover:font-bold hover:mt-1' /></Link>
        </div>
        <div className='flex p-5 mx-auto  lg:justify-center lg:items-center'>
          <Link to='#about' smooth className='mx-10 hover:font-bold hover:py-1' scroll={scrollWithOffset}>About</Link>
          <Link to='#skills' smooth className='mx-10 hover:font-bold hover:py-1' scroll={scrollWithOffset}>Skills</Link>
          <Link to='#education' smooth className='mx-10 hover:font-bold hover:py-1' scroll={scrollWithOffset}>Education</Link>
          <Link to='#projects' smooth className='mx-10 hover:font-bold hover:py-1' scroll={scrollWithOffset}>Projects</Link>
        </div>
        <div className='p-5 m-5 hover:font-bold hover:py-6  lg:justify-center lg:items-center'>
          <Link to='#contact' smooth className='bg-button p-3 rounded-2xl text-font bl border'>Contact</Link>
        </div>
      </div>

    </>
  )
}

export default Nav;



