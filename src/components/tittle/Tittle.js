import React from 'react'
import './Tittle.css'

const Tittle = ({title,subtittle}) => {
  return (
    <div>
      <div className='Tittle'>
        <p>{title}</p>
        <h3>{subtittle}</h3>
      </div>
    </div>
  )
}

export default Tittle