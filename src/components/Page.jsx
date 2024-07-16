import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Page() {

  const [text] = useTypewriter({
    words: ['Fullstack Developer', 'Backend Developer',],
    loop: {},
  })

  return (
    <>
      <div className='flex h-screen'>
        <div className='place-content-around min-w-3/5 max-w-3xl'>
          <div className="ml-40">
            <h1 className='text-5xl mt-20 ml-30 text-font'>I'm a</h1>
            <p className='text-5xl ml-30 text-font'>
              {text}
            </p>
          </div>
        </div>
        <div className='flex-col'>
          <h2 className="text-5xl text-font items-center mt-100 ml-5 leading-15 font-bold">Fernando Cesar</h2>
          <button className='ml-40 mt-10 bg-modal px-5 py-3 rounded-full text-font'>Let's go!</button>
        </div >
      </div >

    </>
  )
}

export default Page;