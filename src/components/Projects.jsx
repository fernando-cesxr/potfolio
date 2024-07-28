import Spendo from '../images/spendo.png'

function Projects() {
  return (
    <>

      <h2 id="projects" className='text-center mt-10 font-bold text-font text-4xl'>Projects</h2>
      <div>
        <h2 className="text-font mt-20 font-bold text-2xl text-center">Spendo</h2>
        <div className='md:flex md:items-center md:justify-center'>
          <div className='lg:max-w-96 text-justify text-font lg:mx-5 lg:p-5 rounded-lg lg:flex-row flex-col px-8'>
            <p>Spendo is an app that I'm currently working. It can track how much you spend on a day, month, or year for you start to economize more money and be more confortable financially. Spendo also can simulate investments with crypto, ETF, Stock and other. The app can also calculate how much a specific expense can put you in debt, based on your recurring expenses. I'm using MySQL for the database, Java with Spring Boot for backend and Kotlin for the front.</p>
          </div>
          <img src={Spendo} className='size-96' />
        </div>

      </div>
    </>
  )
}

export default Projects;