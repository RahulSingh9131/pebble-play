import {createContext,useContext,useReducer} from "react";
import { watchReducerFunc } from "../reducer/watchReducerFunc";

const WatchContext=createContext();

const WatchProvider=({children})=>{

    const initialState={watchBasket:[]};

    const [watchState,watchDispatch]=useReducer(watchReducerFunc,initialState);

    return (
        <WatchContext.Provider value={{watchState,watchDispatch}}>
            {children}
        </WatchContext.Provider>
    )
}

const useWatch=()=>useContext(WatchContext);

export {useWatch,WatchProvider};