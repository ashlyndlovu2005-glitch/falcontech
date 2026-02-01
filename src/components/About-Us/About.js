import React from 'react'
import about from '../../asserts/about.jpg'

import './About.css'

const About = ({setPlaystate}) => {
  return (
    <div>
        <div className='about'>
            <div className='left'>
                <img src={about} alt='institute'/>
                <button className='play' onClick={()=>{setPlaystate(true)}}>Play</button>
                
            </div>
            <div className='right'>
            <h3 >About us</h3>
                <p className='para'>
                        Falcon Tech is a great universty,
                        which  focusses on student growth, and
                        innovation through  our science filled curriculum
                </p>
                <p>
                    We also Great extraCurricul and outdoor activities,
                    which help boost our students mental and physical health whic is required,
                    for fully focus in their school activies
                </p>
                <button className='bt'>More Here</button>
    
            </div>
        </div>
    </div>
  )
}

export default About