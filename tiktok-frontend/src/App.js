import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Video from './Video';
// import video1 from "./videos/pexels-kampus-production-7963239-2160x3840-25fps.mp4"
// import video2 from "./videos/pexels-cottonbro-studio-3704253-2160x4096-50fps.mp4"
import axios from "./axios.js"

function App() {
  const [user, setUser] = useState([])
  useEffect(()=>{
    const fetchData=async()=>{
      const response = await axios.get("/v1/posts")
      setUser(response.data)
      console.log(response.data)
    }
    fetchData()
  },[])

  return (
    <div className="app">
      <div className='app__videos'>
      {user && user.map((e)=>{
        console.log(user)
          return <Video src={e.url} channel={e.channel} description={e.description} song={e.song} likes={e.likes} shares={e.shares} messages={e.messages}/>

        })}
      {/* <Video src={video2} channel="@ThisisBhandari" description={"Created by @ThisisBhandari -- Follow Me on Twitter"} song={"Hotel California -- Eagles"} likes={115} shares={122} messages={304}/> */}

      </div>
    </div>
  );
}

export default App;
