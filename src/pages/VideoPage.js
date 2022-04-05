import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import VideoCard from '../components/VideoCard';
import "../css/main.css";

function VideoPage() {

  const [video,setVideo]=useState([]);

  const fetchVideo= async ()=>{
    try{
      const res= await axios.get("/api/videos")
      setVideo(res.data.videos)
    }catch(e){
      alert("please check the api endpoints again...")
    }
  }

  useEffect(()=>fetchVideo(),[]);
  useEffect(()=>{
    document.title="videoPage";
  },[])

  return (
    <div className='videopage'>
        <Header/>
        <div className='videopage-body'>
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
        </div>
    </div>
  )
}

export default VideoPage