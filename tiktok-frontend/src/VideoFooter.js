import React from 'react'
import "./VideoFooter.css"
import {IoMdMusicalNote} from "react-icons/io"
import img from "./images/stock-vector-vinyl-record-icon-vector-illustration-1704642502-removebg-preview.png"

const VideoFooter = ({channel, description, song}) => {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>
            <h3>{channel}</h3>
            <p>{description}</p>
            <div className='videoFooter__ticker'>
                <IoMdMusicalNote className='videoFooter__icon'/>
                <div className='ticker-container'>
                    <div className='ticker-content'>
                        {song}
                    </div>
                </div>
                <img className='videoFooter__record' src={img} width={80} height={80} alt="/"/>
            </div>
        </div>
    </div>
  )
}

export default VideoFooter