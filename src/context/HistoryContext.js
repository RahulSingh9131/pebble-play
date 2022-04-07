import {createContext,useContext,useReducer} from "react";
import { historyReducerFunc } from "../reducer/historyReducerFunc";

const HistoryContext=createContext();

const HistoryProvider=({children})=>{
    const [historyState,historyDispatch]=useReducer(historyReducerFunc,{historyBasket:[]})
    return (
        <HistoryContext.Provider value={{historyState,historyDispatch}}>
            {children}
        </HistoryContext.Provider>
    )
}

const useHistory=()=>useContext(HistoryContext);

export {useHistory,HistoryProvider};