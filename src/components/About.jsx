import perfil from '../images/Foto de perfil linkedin.jpeg'
import resume from '../images/resume.pdf'

function about() {
  return (
    <>

      <div className='lg:flex lg:place-content-center' >
        <div className="flex items-center justify-center flex-col lg:mx-52">
          <img src={perfil} alt="pic" className='size-32 rounded-full lg:size-52 lg:mb-6 bl' />
          <div className='bg-button p-3 rounded-2xl text-font bl mt-5 border '>
            <a href={resume} download="resume">Download CV</a>
          </div>
        </div>


        <div className='rounded-xl m-5 bg-modal border // lg:max-w-2xl bl '>
          <h2 className='text-font font-bold text-center pt-5 text-3xl' >About me</h2>
          <p className='text-font text-justify m-4 p-2'>
            I am currently studying Databases, Data Analysis, Big Data, and Data Engineering at Impacta, finishing in January 2027. I'm learning NoSQL (MongoDB, Cassandra, Neo4J), SQL (MySQL, PostgreSQL), AWS, TensorFlow, Apache Spark, and Python. Previously, I studied Systems Analysis and Development at FIAP, focusing on agile methodologies (Scrum), UI/UX design, data modeling, and programming (Python, Java/Kotlin, JavaScript) with frameworks like React, Spring Boot, and .Net. These courses give me a strong foundation in system development and data management.</p>
        </div>
      </div >
    </>
  )
}

export default about;