import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { usePlaylist } from '../context/PlaylistContext';
import { Avatar } from '@mui/material';
import "../css/main.css";
import {Link} from "react-router-dom";

function VideoInPlaylistCard(videos) {
    const {_id,image,title,category,views,timestamp,playlistDetail}=videos;
    const {playDispatch}=usePlaylist();
  return (
    <div className='videoinlist' key={_id}>
        <Link to={`/videopage/${_id}`}>
            <img className='videoinlist-thumbnail' src={image} alt={title}/>
        </Link>
        <div className='videoinlist-info'>
            <Avatar className="videoinlist-avatar" src={image} alt={title}/>
            <DeleteIcon className="videoinlist-delete" onClick={()=>{playDispatch({type:"REMOVE_FROM_PLAYLIST",payload:{_id,playlistDetail}})}}/>
            <div className="videoinlist-text">
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

export default VideoInPlaylistCard