import {createContext,useContext,useReducer,useState} from "react";   
import { playReducerFunc } from "../reducer/playReducerFunc";

const PlaylistContext=createContext();

const PlaylistProvider=({children})=>{
    const [showModal,setShowModal]=useState(false);
    const [modalItem,setModalItem]=useState({});
    const [playState,playDispatch]=useReducer(playReducerFunc,{playlist:[]})
    return (<PlaylistContext.Provider value={{playState,playDispatch,showModal,setShowModal,modalItem,setModalItem}}>
        {children}
    </PlaylistContext.Provider>)
}

const usePlaylist=()=>useContext(PlaylistContext)

export {usePlaylist,PlaylistProvider};