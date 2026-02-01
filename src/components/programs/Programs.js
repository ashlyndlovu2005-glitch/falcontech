

import React from 'react'
import './Programs.css'
import program3 from '../../asserts/program3.jpg'
import program2 from '../../asserts/program2.jpg'
import program from  '../../asserts/program.jpg'

const Programs = () => {
    return (
        <>
            <div className='programs'>
                <div className='program'>
                    <img src={program} alt='program' />
                    <h3 className='pop'>Graduate degree</h3>
                </div>
                <div className='program'>
                    <img src={program2} alt='program' />
                    <h3 className='pop'>POST GRADUATE</h3>
                </div>
                <div className='program'>
                    <img src={program3} alt='program' />
                    <h3 className='pop'>MASTERS DEGREE</h3>
                </div>
            </div>
        </>
    )
}

export default Programs