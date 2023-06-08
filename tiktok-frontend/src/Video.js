import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from "./VideoFooter.js"
import VideoSidebar from "./VideoSidebar.js"

const Video = ({src, channel, description, song, likes, shares, messages}) => {
  const [playing, setPlaying] = useState(false)
  const videoRef =useRef()

  const handleVideoPress=()=>{
    if(playing){
        videoRef.current.pause()
        setPlaying(false)
    }
    else{
        videoRef.current.play()
        setPlaying(true)
    }
  }

  return (

    <div className='video'>
        <video ref={videoRef} onClick={handleVideoPress} loop className='video__player' autoPlay src={src}/>
        {/* VideoFooter */}
        <VideoFooter channel={channel} description={description} song={song}/>
        {/* VideoSidebar */}
        <VideoSidebar likes={likes} shares={shares} messages={messages}/>
    </div>
  )
}

export default Video