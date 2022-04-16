import React,{useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import "../css/main.css";
import { usePlaylist } from '../context/PlaylistContext';


function PlaylistModal({show}) {
  const [toggle,setToggle]=useState(false);
  const [inputValue,setInputValue]=useState("");
  const {playState:{playlist},playDispatch,showModal,setShowModal,modalItem}=usePlaylist();
  if(!show){
    return null;
  }

  const clickHandeler=()=>{
    if(inputValue){
      const checkExistingPlaylist=playlist.find((elem)=>elem.playlistName===inputValue);
      if(checkExistingPlaylist){
        setToggle((prev)=>!prev);
      }else{
        playDispatch({type:"ADD_NEW_PLAYLIST",payload:inputValue});
        setToggle((prev)=>!prev);
      }
      setInputValue("");
    }else{
      setToggle((prev)=>!prev);
    }
  }

  const addVideoInPlaylist=(currentPlayId)=>{
    playDispatch({
      type:"ADD_VIDEO_TO_PLAYLIST",
      payload:{currentPlayId,modalItem}
    })
  }

  return (
    <div className="modal-wrapper">
      <div className='modal'>
         <div className='modal-header flex justify-space align-center'>
            <h3 className='modal-text'>Add videos to playlist...</h3>
            <DeleteIcon className='modal-delete-icon' onClick={()=>setShowModal(false)}/>
         </div>
         <div>
           {playlist.map((elem)=>{
             return (
               <div className='flex align-center'>
                 <input type="checkbox" className='modal-checkbox' onClick={()=>addVideoInPlaylist(elem.playlistId)} checked={elem.videoInPlaylist.includes(modalItem)}/>
                 <h3 className='modal-text'>{elem.playlistName}</h3>
               </div>
             )
           })}
         </div>
         {toggle && 
          <div className='flex align-center'>
              <h3 className='modal-text'>playlistName:</h3>
              <input type="text" className="toggle-input" onChange={(e)=>setInputValue(e.target.value)}/>
          </div>
         }
        <button onClick={()=>clickHandeler()} className="playlist-btn">Add new playlist</button>
      </div>
    </div>
  )
}

export default PlaylistModal