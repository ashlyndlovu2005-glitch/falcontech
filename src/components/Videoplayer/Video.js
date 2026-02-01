import React, { useRef } from 'react'
import video from '../../asserts/programvid.mp4'
import './Video.css'


const Video = ({ playState, setPlaystate }) => {
  const player = useRef(null)
  function removeVid(e){
    if(e.target === player.current){
      setPlaystate(false)
    }
  }
  return (
    <>
      <div className={`video ${playState? '' : 'hide'}`}  ref={player}
      onClick={removeVid}
      >
        <video src={video} autoPlay controls muted className='videos ' ></video>
      </div >

    </>
  )}


export default Video