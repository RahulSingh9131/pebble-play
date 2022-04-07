import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import VideoCard from '../components/VideoCard';
import "../css/main.css";
import Footer from '../components/Footer';
import useDocumentTitle from './useDocumentTitle';

function VideoPage() {

  const [video,setVideo]=useState([]);

  const fetchVideo= async ()=>{
    try{
      const res= await axios.get("/api/videos")
      setVideo(res.data.videos)
    }catch(e){
      alert("request failed...try again");
      console.log(e);
    }
  }

  useEffect(()=>fetchVideo(),[]);
  useDocumentTitle("videoPage");

  return (
    <div className='videopage'>
        <Header/>
        <section className='videopage-body'>
          <div className='container'>
            <Sidebar/>
            <div className='flex flex-wrap'>
              {video && video.map(({_id,image,title,timestamp,views,category})=>{
                return (
                  <VideoCard _id={_id} image={image} title={title} timestamp={timestamp} views={views} category={category} />
                )
              })}
            </div>
          </div>
        </section>
        <Footer/>
    </div>
  )
}

export default VideoPage