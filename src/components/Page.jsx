import { useTypewriter } from 'react-simple-typewriter'

function Page() {

  const [text] = useTypewriter({
    words: ['Fullstack Developer', 'Backend Developer',],
    loop: {},
  })

  return (
    <>
      <div id='home' className='h-screen w-screen// lg:flex lg:place-content-between  lg:pt-20'>
        <div className='pt-52 // '>
          <h2 className="text-font text-center text-4xl font-bold //  lg:pl-96 lg:text-5xl lg:pt-55">Fernando Cesar</h2>
          <button className='hidden'>Let's go!</button>
        </div >
        <div className='pt-40 // lg:pt-96 lg:mr-80'>

          <div className="flex items-center justify-center // lg:mr-40 lg:min-w-96 ">
            <h1 className='text-font opacity-70 text-center text-2xl // lg:text-4xl lg:text-left'>I'm a</h1>
          </div>
          <p className='text-font text-center  text-4xl font-bold // lg:text-left lg:text-5xl'>
            {text}
          </p>
        </div>

      </div >

    </>
  )
}

export default Page;