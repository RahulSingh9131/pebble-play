import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import VideoCard from '../components/VideoCard';
import "../css/main.css";
import Footer from '../components/Footer';
import useDocumentTitle from './useDocumentTitle';
import PlaylistModal from '../components/PlaylistModal';
import { usePlaylist } from '../context/PlaylistContext';
import { useVideos } from '../context/VideoContext';

function VideoPage() {

  const {videoState:{videos,category},videoDispatch}=useVideos();
  const {showModal}=usePlaylist();

  useDocumentTitle("videoPage");

  const filteredList= videos.filter((elem)=>elem.category===category);

  return (
    <div className='videopage'>
        <Header/>
        <div className="tabs-container flex flex-wrap align-center justify-center">
            <button className='category-tab' onClick={()=>videoDispatch({type:"CATEGORY_FILTER",payload:"Action"})}>Action</button>
            <button className='category-tab' onClick={()=>videoDispatch({type:"CATEGORY_FILTER",payload:"Comedy"})}>Comedy</button>
            <button className='category-tab' onClick={()=>videoDispatch({type:"CATEGORY_FILTER",payload:"Horror"})}>Horror</button>
            <button className='category-tab' onClick={()=>videoDispatch({type:"CATEGORY_FILTER",payload:"Drama"})}>Drama</button>
            <button className='category-tab' onClick={()=>videoDispatch({type:"CATEGORY_FILTER",payload:"Thriller"})}>Thriller</button>
            <button className='category-tab' onClick={()=>videoDispatch({type:"CATEGORY_FILTER",payload:"Romance"})}>Romance</button>
            <button className='category-tab' onClick={()=>videoDispatch({type:"CATEGORY_FILTER",payload:videos})}>All</button>

        </div>
        <section className='videopage-body'>
          <div className='container'>
            <Sidebar/>
            <div className='flex flex-wrap'>
              {(filteredList.length!=0 ?  filteredList:videos).map(({_id,image,title,timestamp,views,category})=>{
                return (
                  <VideoCard _id={_id} image={image} title={title} timestamp={timestamp} views={views} category={category} />
                )
              })}
            <PlaylistModal show={showModal}></PlaylistModal>
            </div>
          </div>
        </section>
        <Footer/>
    </div>
  )
}

export default VideoPage