import java from '../images/java.png'
import spring from '../images/spring-icon-256x256-2efvkvky.png'
import mysql from '../images/mysql-logo-vector-1.png'
import docker from '../images/docker-27.png'
import python from '../images/Python-logo-notext.svg.png'
import junit from '../images/juni-removebg-preview.png'
import react from '../images/React-icon.svg.png'
import kotlin from '../images/Kotlin_Icon.png'

function skills() {
  return (
    <>

      <h2 id="skills" className='text-center mt-16 font-bold text-font text-4xl'>Skills</h2>
      <div className='flex justify-center my-10'>
        <div>
          <img src={java} alt='pic' className='size-28 mx-10 block2' />
          <p className='text-font mt-4 text-center'>Java</p>
        </div>
        <div>
          <img src={spring} alt='pic' className='size-28 mx-10 block2' />
          <p className='text-font mt-4 text-center'>Spring Boot</p>
        </div>
        <div>
          <img src={mysql} alt='pic' className='size-28 mx-10 block2' />
          <p className='text-font mt-4 text-center'>MySQL</p>
        </div>
        <div>
          <img src={docker} alt='pic' className='size-28 mx-10 block2' />
          <p className='text-font mt-4 text-center'>Docker</p>
        </div>
        <div>
          <img src={junit} alt='pic' className='size-28 mx-10 block2' />
          <p className='text-font mt-4 text-center'>JUNIT</p>
        </div>
        <div>
          <img src={python} alt='pic' className='size-28 mx-10 block2' />
          <p className='text-font mt-4 text-center'>Python</p>
        </div>
        <div>
          <img src={react} alt='pic' className='size-28 mx-10 block2' />
          <p className='text-font mt-4 text-center'>React</p>
        </div>
        <div>
          <img src={kotlin} alt='pic' className='size-28 mx-10 block2' />
          <p className='text-font mt-4 text-center'>Kotlin</p>
        </div>
      </div>

    </>
  )
}

export default skills;