import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import "../css/main.css";
import { usePlaylist } from '../context/PlaylistContext';
import {Link} from "react-router-dom";


function PlaylistCard({playlistDetails}) {
    const {playlistName,playlistId,videoInPlaylist}=playlistDetails;
    const {playDispatch}=usePlaylist();
  return (
    <div className='playlistcard'>
        <div className='playlistcard-header flex justify-space'>
            <div className='playlistcard-heading'>{playlistName}</div>
            <div className='playlistcard-delete' onClick={()=>{playDispatch({type:"DELETE_PLAYLIST",payload:playlistId})}}>
                <DeleteIcon/>
            </div>
        </div>
        <Link to={`/playlist/${playlistId}`}>
            {videoInPlaylist?.length?(
                <img src={`${videoInPlaylist.slice(-1).map((item) => item.image)[0]}`} />
            ):(
                <h3 className='playlistcard-msg'>Add something in {playlistName}</h3>
            )}
        </Link>
    </div>
  )
}

export default PlaylistCard