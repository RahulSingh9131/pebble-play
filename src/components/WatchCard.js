import { Avatar } from '@mui/material'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import React from 'react'
import "../css/main.css";

function WatchCard(videos) {
    const {_id,image,title,category,views,timestamp}=videos;
  return (
    <div className='watchcard' key={_id}>
        <img className='watchcard-thumbnail' src={image} alt={title}/>
        <div className='watchcard-info'>
            <Avatar className="watchcard-avatar" src={image} alt={title}/>
            <ThumbUpOutlinedIcon className="watchcard-like"/>
            <div className="watchcard-text">
                <h4>{title}</h4>
                <p>{category}</p>
                <p>
                    {views} * {timestamp}
                </p>
            </div>
        </div>
    </div>
  )
}

export default WatchCard