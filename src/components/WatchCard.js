import { Avatar } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import React from 'react'
import {useWatch} from "../context/WatchContext";
import "../css/main.css";

function WatchCard(videos) {
    const {_id,image,title,category,views,timestamp}=videos;
    const {watchDispatch}=useWatch();

  return (
    <div className='watchcard' key={_id}>
        <img className='watchcard-thumbnail' src={image} alt={title}/>
        <div className='watchcard-info'>
            <Avatar className="watchcard-avatar" src={image} alt={title}/>
            <DeleteOutlineIcon className="watchcard-delete" onClick={()=>watchDispatch({type:"REMOVE_FROM_WATCHLATER",payload:videos})}/>
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