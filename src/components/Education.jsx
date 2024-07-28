import { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";


function Education() {

  // useEffect(() => {
  //   const wrapper = document.querySelector('.wrapper');
  //   const nxtBtn = document.getElementById('nextBtn');
  //   const backBtn = document.getElementById('backBtn');

  //   if (nxtBtn && backBtn && wrapper) {
  //     nxtBtn.addEventListener("click", () => {
  //       wrapper.style.scrollBehavior = "smooth";
  //       wrapper.scrollLeft += 350;
  //     });

  //     backBtn.addEventListener("click", () => {
  //       wrapper.style.scrollBehavior = "smooth";
  //       wrapper.scrollLeft -= 350;
  //     });
  //   }
  // }, []);



  useEffect(() => {
    const wrapper = document.querySelector('.wrapper');
    const nxtBtn = document.getElementById('nextBtn');
    const backBtn = document.getElementById('backBtn');

    nxtBtn.addEventListener("click", () => {
      wrapper.style.scrollBehavior = "smooth";
      wrapper.scrollLeft += 350;
    });

    backBtn.addEventListener("click", () => {
      wrapper.style.scrollBehavior = "smooth";
      wrapper.scrollLeft -= 350;
    });

  });

  return (
    <>

      <h2 id="education" className='text-center my-16 font-bold text-font text-4xl'>Education</h2>
      <div className='lg:place-content-center lg:my-10 lg:flex lg:flex-row wrapper bl'>
        <div className='lg:max-w-xl lg:rounded-lg lg:mx-20 lg:border lg: lg:w-1/2 mx-44 mt-5 card w-300px md:w-500px lg:p-5 bg-modal ' >
          <h2 className='text-xl text-font p-5 text-center  w-full'>Impacta - Database, Data Analysis, Big Data, and Data Engineering</h2>
          <p className='text-font mt text-center opacity-80'>August 2024 - January 2027</p>
          <p className='text-font text-justify p-2 rounded-lg '>
            I am currently pursuing a course at Impacta in data analysis, big data, and data engineering. I've gained expertise in NoSQL and SQL databases, working with MongoDB, Cassandra, Neo4J, MySQL, and PostgreSQL. I've enhanced my Python skills for data analysis and application development. My coursework covers AWS cloud computing, TensorFlow for machine learning, and Apache Spark for big data processing, equipping me to manage and analyze large datasets effectively.</p>
          <button id="nextBtn" className=" text-font lg:hidden border-2 p-1 rounded-full mb-1"> <HiArrowNarrowRight /> </button>
          <p className="text-font lg:hidden">1/2</p>
        </div>

        <div className='lg:max-w-xl lg:rounded-lg lg:mx-20 lg:border lg:w-1/2 mr-44 mt-5 card w-300px md:w-500px lg:p-5 bg-modal' >
          <h2 className='text-xl text-font p-5 text-center'>FIAP — Systems Analysis and Development Technician</h2>
          <p className='text-font  text-center opacity-80'>March 2022 - December 2023</p>
          <p className='text-font mt-4 text-justify p-2 rounded-lg '>
            At FIAP, I built a solid foundation in systems analysis and development, focusing on agile methodologies like Scrum for better project management. My coursework covered UI/UX design, database management, and SQL. I enhanced my programming skills in Python, Java/Kotlin, and JavaScript, and worked with frameworks such as React, Spring Boot, and .Net, preparing me for a versatile software development career.</p>
          <button id="backBtn" className="text-font lg:hidden border-2 p-1 rounded-full mb-1"><HiArrowNarrowLeft /></button>
          <p className="text-font lg:hidden">2/2</p>
        </div>


      </div>

    </>
  )
}



export default Education;