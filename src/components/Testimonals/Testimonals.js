import React from 'react'
import user1 from '../../asserts/user1.jpg'
import './Testimonals.css'

const Testimonals = () => {

  
  
  return (
    <div className='testimonials' name='testimonial'>
      
      <div className='slider'>
        <ul >
          <li>
            <div className='slide'>
            <div className='usercontainer'>
                <div className='user-info'>
                  <img src={user1} alt='hello' />
                </div>
                <div className='userr'>
                  <h3>Ashly Ndlovu</h3>
                  <span>Falcon,Zimbabwe</span>
                </div>
            </div>
              
              <p>
                Choosing Falcon was one ot he best decisions in my life
                Their word class teaching techniques have reall helped me see
                the word in a different and productive way that i had not thought of
                seeing the word
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='usercontainer'>
                <div className='user-info'>
                  <img src={user1} alt='hello' />
                </div>
                <div className='userr'>
                  <h3>Ashly Ndlovu</h3>
                  <span>Falcon,Zimbabwe</span>
                </div>
              </div>

              <p>
                Choosing Falcon was one ot he best decisions in my life
                Their word class teaching techniques have reall helped me see
                the word in a different and productive way that i had not thought of
                seeing the word
              </p>
            </div>
          </li>
         
        </ul>
      </div>
    </div>
  )
}

export default Testimonals