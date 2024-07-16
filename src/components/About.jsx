import perfil from '../images/Foto de perfil linkedin.jpeg'

function about() {
  return (
    <>

      <div div className='lg:flex place-content-center bl' >
        <div className="ml-40 w-3/12 mt-10 flex-col">
          <img src={perfil} alt="pic" className='size-64 rounded-3xl border-modal border-4' />
          <button className='bg-modal h-16 min-w-32 rounded-2xl text-font ml-16 mt-10'>Download CV</button>
        </div>

        <div className='mr-56 max-w-xl rounded-2xl bg-modal bg-opacity-50'>
          <h2 className='text-3xl text-font text-center font-bold mt-10' >About me</h2>
          <p className='text-font mt-4 p-5 text-justify opacity-100'>
            I am currently studying Databases, Data Analysis, Big Data, and Data Engineering at Impacta, finishing in January 2027. I'm learning NoSQL (MongoDB, Cassandra, Neo4J), SQL (MySQL, PostgreSQL), AWS, TensorFlow, Apache Spark, and Python. Previously, I studied Systems Analysis and Development at FIAP, focusing on agile methodologies (Scrum), UI/UX design, data modeling, and programming (Python, Java/Kotlin, JavaScript) with frameworks like React, Spring Boot, and .Net. These courses give me a strong foundation in system development and data management.</p>
        </div>
      </div >
    </>
  )
}

export default about;