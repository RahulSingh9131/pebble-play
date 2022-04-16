import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import AddIcon from '@mui/icons-material/Add';
import useDocumentTitle from './useDocumentTitle'
import "../css/main.css";
import { usePlaylist } from '../context/PlaylistContext';
import PlaylistCard from '../components/PlaylistCard';
import {useNavigate} from "react-router-dom";


function PlaylistPage() {
    useDocumentTitle("playlist");
    const [newPlaylist,setNewPlaylist]=useState("");
    const {playState:{playlist},playDispatch}=usePlaylist();

    const navigate=useNavigate();

    const addNewPlaylist=()=>{
        playDispatch({
            type:"ADD_NEW_PLAYLIST",
            payload:newPlaylist
        })
        setNewPlaylist("")
    }

  return (
    <div className='playlist'>
        <Header/>
        <section className='playlist-body'>
          <div className='container'>
            <Sidebar/>
            <div className='playlist-input-body'>
                <input type="text" placeholder="add a playlist" value={newPlaylist} onChange={(e)=>setNewPlaylist(e.target.value)}/>
                <button onClick={()=>addNewPlaylist()}><AddIcon/></button>
            </div>
            <div className='flex flex-wrap'>
              {playlist.length>0?(
                playlist.map((item)=>{
                  return (
                    <PlaylistCard playlistDetails={item} key={item.playlistId}/>
                  )
                })
              ):(
                <button className='playlist-btn' onClick={()=>navigate("/videopage")}>Add videos</button>
              )}
            </div>
          </div>
        </section>
        <Footer/>
    </div>
  )
}

export default PlaylistPage