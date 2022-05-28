import axios from "axios";
import { createContext,useContext,useEffect,useReducer } from "react";

const VideoContext= createContext();

const VideoProvider= ({children})=>{
    const videoReducerFunc=(videoState,action)=>{
        switch(action.type){
            case "CATEGORY_FILTER": 
               return {...videoState,category:action.payload}
            case "VIDEOS_DATA":
                return {...videoState,videos:action.payload}
            default :
               return {...videoState};   
        }
    }
    const [videoState,videoDispatch]=useReducer(videoReducerFunc,{videos:[],category:""});
    const getVideo= async ()=>{
        try{
            const res= await axios.get("/api/videos");
            videoDispatch({type:"VIDEOS_DATA",payload:res.data.videos})
        }catch(err){
            console.log("error is loading videos",err);
        }
    }

    useEffect(()=>getVideo(),[]);

    return (
        <VideoContext.Provider value={{videoState,videoDispatch}}>
            {children}
        </VideoContext.Provider>
    )
}

const useVideos= ()=>useContext(VideoContext);

export {useVideos,VideoProvider};