import { WatchLaterOutlined } from '@mui/icons-material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Avatar } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { useWatch } from '../context/WatchContext';
import "../css/main.css";
import { useLike } from '../context/LikeContext';

function VideoCard(videos) {
  const {_id,image,title,views,timestamp,category}=videos;
  
  const {watchState:{watchBasket},watchDispatch}=useWatch();
  const {likeState:{likeBasket},likeDispatch}=useLike();
 
  const watchLater=()=>{
    watchDispatch({type:"ADD_TO_WATCHLATER",payload:videos})
  }

  const removeWatchLater=()=>{
    watchDispatch({type:"REMOVE_FROM_WATCHLATER",payload:videos})
  }

  const watchNotify = () => toast.success(`${title} is added to watch later!!`,{position:"bottom-center"});
  const removeWatchNotify = () => toast.error(`${title} is removed from watch later!!`,{position:"top-center"});


  return (
    <div className='videocard' key={_id}>
        <img className='videocard-thumbnail' src={image} alt={title}/>
        <div className='videocard-info'>
            <Avatar className="videocard-avatar" src={image} alt={title}/>
            {
              likeBasket.some((c)=>c._id===videos._id)?(
                <ThumbUpIcon className='videocard-like filled-like' onClick={()=>likeDispatch({type:"REMOVE_FROM_LIKED",payload:videos})}/>
              ):(
                <ThumbUpOutlinedIcon className="videocard-like" onClick={()=>likeDispatch({type:"ADD_TO_LIKED",payload:videos})}/>
              )
            }
            <div className="videocard-text">
                <h4>{title}</h4>
                <p>{category}</p>
                <p>
                    {views} * {timestamp}
                </p>
                {
                watchBasket.some((c)=>c._id===videos._id)?(
                  <button className='videocard-button' onClick={()=>{removeWatchNotify(); removeWatchLater();}}>Remove from WatchLater</button>
                ):(
                  <button className='videocard-button' onClick={()=>{watchNotify(); watchLater();}}>WatchLater <WatchLaterOutlined className="button-icon"/></button>
                )
                }
                <ToastContainer position='bottom-center'/>
            </div>
        </div>
    </div>
  )
}

export default VideoCard