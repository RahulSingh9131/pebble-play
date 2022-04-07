import {createContext,useContext,useReducer} from "react";
import { likeReducerFunc } from "../reducer/likeReducerFunc";

const LikeContext=createContext();

const LikeProvider=({children})=>{

    const [likeState,likeDispatch]=useReducer(likeReducerFunc,{likeBasket:[]})

    return (
        <LikeContext.Provider value={{likeState,likeDispatch}}>
            {children}
        </LikeContext.Provider>
    )
}

const useLike=()=>useContext(LikeContext);

export {useLike,LikeProvider};