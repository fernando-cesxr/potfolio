function Education() {
  return (
    <>

      <h2 id="education" className='text-center mt-16 font-bold text-font text-4xl'>Education</h2>

      <div className='hidden place-content-center my-10 bl sm:flex'>
        <div className='max-w-xl rounded-lg mx-20 border-4 border-modal flex-col '>
          <h2 className='text-xl text-font p-5 text-center  w-full'>Impacta - Database, Data Analysis, Big Data, and Data Engineering</h2>
          <p className='text-font mt text-center opacity-80'>August 2024 - January 2027</p>
          <p className='text-font text-justify p-5 rounded-lg '>
            Currently, I am pursuing a comprehensive course at Impacta focused on data analysis, big data, and data engineering. This course has enabled me to gain expertise in both NoSQL and SQL databases, with hands-on experience in technologies such as MongoDB, Cassandra, Neo4J, MySQL, and PostgreSQL. I have also enhanced my Python programming skills to perform sophisticated data analyses and develop data-driven applications. My coursework includes cloud computing with AWS, machine learning with TensorFlow, and big data processing with Apache Spark, equipping me with the skills to manage and analyze large datasets effectively.</p>
          <div className='bg-modal flex items-center justify-center mx-60 mb-5 p-2 rounded-md mt-8'>
            <a href='https://www.impacta.edu.br/graduacoes/banco-de-dados-ead' target='_blank' className='text-font text-center'>See more</a>
          </div>
        </div>

        <div className=' max-w-xl rounded-lg mx-20 border-4 border-modal flex-col ' >

          <h2 className='text-xl text-font p-5 text-center'>FIAP — Systems Analysis and Development Technician</h2>
          <p className='text-font  text-center opacity-80'>March 2022 - December 2023</p>
          <p className='text-font mt-4 text-justify p-5 rounded-lg '>
            At FIAP, I developed a strong foundation in systems analysis and development, focusing on agile methodologies such as Scrum to enhance project management and efficiency. My coursework included UI/UX design, which helped me understand the importance of user-centered design in creating effective software solutions. I also gained a solid grounding in database management, including data modeling and SQL. My programming skills were honed through the use of languages like Python, Java/Kotlin, and JavaScript. Additionally, I worked with several frameworks, including React for front-end development, Spring Boot for backend services, and .Net for robust application development, preparing me for a versatile career in software development.</p>
          <div className='bg-modal flex items-center justify-center mx-60 mb-5 p-2 rounded-md'>
            <a href='https://www.fiap.com.br/graduacao/tecnologo/analise-e-desenvolvimento-de-sistemas/' target='_blank' className='text-font text-center'>See more</a>
          </div>
        </div>
      </div>

    </>
  )
}

export default Education;