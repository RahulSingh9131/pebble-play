import axios from "axios";
import { createContext,useContext,useState,useEffect } from "react";

const VideoContext= createContext();

const VideoProvider= ({children})=>{
    const [videos,setVideos]=useState([]);

    const getVideo= async ()=>{
        try{
            const res= await axios.get("/api/videos");
            setVideos(res.data.videos)
        }catch(err){
            console.log("error is loading videos",err);
        }
    }

    useEffect(()=>getVideo(),[]);

    return (
        <VideoContext.Provider value={{videos,setVideos}}>
            {children}
        </VideoContext.Provider>
    )
}

const useVideos= ()=>useContext(VideoContext);

export {useVideos,VideoProvider};