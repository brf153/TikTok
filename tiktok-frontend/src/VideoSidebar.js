import React, { useState } from "react";
import "./VideoSidebar.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdLibraryBooks } from "react-icons/md";
import { BsShareFill } from "react-icons/bs";

const VideoSidebar = ({likes, shares, messages}) => {
  const [liked, setLiked] = useState(false);

  const likedFunction=()=>{
    if(liked){
      setLiked(false)
    }
    else{
      setLiked(true)
    }
  }
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <AiFillHeart onClick={likedFunction} fontSize={30} />
        ) : (
          <AiOutlineHeart onClick={likedFunction} fontSize={30} />
        )}

        <p>{liked?parseInt(likes)+1:likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MdLibraryBooks fontSize={30} />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <BsShareFill fontSize={30} />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
