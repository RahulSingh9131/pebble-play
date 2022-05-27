import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Avatar } from '@mui/material'
import "../css/main.css";
import { useLike } from '../context/LikeContext';
import {Link} from "react-router-dom";


function LikeCard(videos) {
    const {_id,image,title,category,views,timestamp}=videos;
    const {likeDispatch}=useLike();

  return (
    <div className='likecard' key={_id}>
        <Link to={`/videopage/${_id}`}>
            <img className='likecard-thumbnail' src={image} alt={title}/>
        </Link>
        <div className='likecard-info'>
            <Avatar className="likecard-avatar" src={image} alt={title}/>
            <DeleteOutlineIcon className="likecard-delete"  onClick={()=>likeDispatch({type:"REMOVE_FROM_LIKED",payload:videos})}/>
            <div className="likecard-text">
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

export default LikeCard