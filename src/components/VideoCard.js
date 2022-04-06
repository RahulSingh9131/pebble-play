import { WatchLaterOutlined } from '@mui/icons-material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { Avatar } from '@mui/material';
import React from 'react';
import "../css/main.css";

function VideoCard({_id,image,title,views,timestamp,category}) {
  return (
    <div className='videocard' key={_id}>
        <img className='videocard-thumbnail' src={image} alt={title}/>
        <div className='videocard-info'>
            <Avatar className="videocard-avatar" src={image} alt={title}/>
            <ThumbUpOutlinedIcon className="videocard-like"/>
            <div className="videocard-text">
                <h4>{title}</h4>
                <p>{category}</p>
                <p>
                    {views} * {timestamp}
                </p>
                <button className='videocard-button'>WatchLater <WatchLaterOutlined className="button-icon"/></button>
            </div>
        </div>
    </div>
  )
}

export default VideoCard