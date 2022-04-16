import React from 'react'
import {useParams} from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { usePlaylist } from '../context/PlaylistContext';
import VideoInPlaylistCard from '../components/VideoInPlaylistCard';
import useDocumentTitle from './useDocumentTitle';
import "../css/main.css";


function SinglePlaylistPage() {
    const {playId}=useParams();
    const {playState:{playlist},playDispatch}= usePlaylist();
    const foundPlaylist=playlist?.find((elem)=>elem.playlistId===playId);
    const {playlistName,videoInPlaylist}=foundPlaylist;

    useDocumentTitle(playlistName);

  return (
    <div className='singleplaylist'>
        <Header/>
        <section className='playlist-body'>
          <div className='container'>
            <Sidebar/>
            <div className='flex flex-wrap'>
              {videoInPlaylist.length>0?(
                videoInPlaylist.map(({_id,image,title,timestamp,views,category})=>{
                  return (
                    <VideoInPlaylistCard _id={_id} image={image} title={title} timestamp={timestamp} views={views} category={category} playlistDetail={foundPlaylist}/>
                  )
                })
              ):(
                <h3 className='singleplaylist-msg'>{playlistName} is empty..</h3>
              )}
            </div>
          </div>
        </section>
        <Footer/>
    </div>
  )
}

export default SinglePlaylistPage