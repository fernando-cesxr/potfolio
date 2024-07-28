import { useTypewriter } from 'react-simple-typewriter'
import { HashLink as Link } from 'react-router-hash-link';
import { GoChevronDown } from "react-icons/go";

function Page() {

  const [text] = useTypewriter({
    words: ['Fullstack Developer', 'Backend Developer',],
    loop: {},
  })

  return (
    <>
      <div className='flex-col h-screen'>
        <div id='home' className='// lg:flex lg:place-content-center lg:pt-20'>
          <div className='pt-52 '>
            <h2 className="text-font text-center text-4xl font-bold // lg:text-5xl lg:pt-[215px] lg:mr-80">Fernando Cesar</h2>
          </div >
          <div className='pt-40 // lg:pt-96 lg:ml-40'>
            <div className="flex items-center justify-center // lg:mr-20 lg:min-w-96">
              <h1 className='text-font opacity-70 text-center text-2xl // lg:text-4xl lg:text-left'>I'm a</h1>
            </div>
            <p className='text-font text-center  text-4xl font-bold // lg:text-left lg:text-5xl'>
              {text}
            </p>
          </div>
        </div >
        <div className='hidden pt-72 text-font lg:flex justify-center items-center '>
          <Link to="#about" smooth><GoChevronDown className='size-12 hover:cursor-pointer ' id="about" /></Link>
        </div>

      </div>


    </>
  )
}

export default Page;