import React,{useState,useEffect} from 'react'
import { WatchLaterOutlined } from '@mui/icons-material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Avatar } from '@mui/material';
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useLike } from '../context/LikeContext';
import { useHistory } from '../context/HistoryContext';
import { usePlaylist } from '../context/PlaylistContext';
import { useWatch } from '../context/WatchContext';
import { useVideos } from '../context/VideoContext';
import PlaylistModal from '../components/PlaylistModal';
import ReactPlayer from 'react-player'
import "../css/main.css";
import useDocumentTitle from './useDocumentTitle';

function SingleVideoPage() {
    const {videoId}=useParams();
    const {videoState:{videos}}=useVideos();
    const [singleVideoDetail,setSinglevideoDetail]=useState({});

    const {watchState:{watchBasket},watchDispatch}=useWatch();
    const {likeState:{likeBasket},likeDispatch}=useLike();
    const {historyState:{historyBasket},historyDispatch}=useHistory();
    const {showModal,setShowModal,setModalItem}=usePlaylist();
   
    const watchLater=()=>{
      watchDispatch({type:"ADD_TO_WATCHLATER",payload:singleVideoDetail})
    }
  
    const removeWatchLater=()=>{
      watchDispatch({type:"REMOVE_FROM_WATCHLATER",payload:singleVideoDetail})
    }
  
    useEffect(()=>{
        const foundSingleVideo= videos.find((item)=>item._id===videoId);
        setSinglevideoDetail(foundSingleVideo);
    },[videos])
  
    useDocumentTitle(singleVideoDetail.title);

  return (
    <div className='singlevideo'>
        <Header/>
        <section className='singlevideo-body'>
            <div className='container'>
                <Sidebar/>
                <div className='singlevideo-box'>
                    <div className='singlevideo-contents'>
                           <ReactPlayer
                                className="react-player"
                                controls
                                url={`https://www.youtube.com/watch?v=${singleVideoDetail.video}`}
                                width="100%"
                                onStart={()=>historyDispatch({type:"ADD_TO_HISTORY",payload:singleVideoDetail})}
                            />
                        <div className='singlevideo-info'>
                            <div className="singlevideo-text">
                                <Avatar className="singlevideo-avatar" src={singleVideoDetail.image} alt={singleVideoDetail.title}/>
                                <div>
                                    <h4>{singleVideoDetail.title}</h4>
                                    <p>{singleVideoDetail.category}</p>
                                    <p>
                                    { singleVideoDetail.views} * { singleVideoDetail.timestamp}
                                    </p>
                                    {
                                    watchBasket.some((c)=>c._id===singleVideoDetail._id)?(
                                    <button className='singlevideo-button' onClick={()=> removeWatchLater()}>Remove from WatchLater</button>
                                    ):(
                                    <button className='singlevideo-button' onClick={()=> watchLater()}>WatchLater <WatchLaterOutlined className="button-icon"/></button>
                                    )
                                    }
                                </div>
                            </div>
                            <div className='singlevideo-icons'>
                                <PlaylistAddIcon className='singlevideo-playlist' onClick={()=>{setShowModal(true); setModalItem(singleVideoDetail);}}/>
                                {
                                likeBasket.some((c)=>c._id===singleVideoDetail._id)?(
                                    <ThumbUpIcon className='singlevideo-like filled-like' onClick={()=>likeDispatch({type:"REMOVE_FROM_LIKED",payload:singleVideoDetail})}/>
                                ):(
                                    <ThumbUpOutlinedIcon className="singlevideo-like" onClick={()=>likeDispatch({type:"ADD_TO_LIKED",payload:singleVideoDetail})}/>
                                )
                                }
                            </div>
                        </div>
                    </div>
                <PlaylistModal show={showModal}></PlaylistModal>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default SingleVideoPage