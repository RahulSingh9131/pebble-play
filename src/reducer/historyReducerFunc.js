export const historyReducerFunc=(historyState,action)=>{
    switch(action.type){
        case "ADD_TO_HISTORY":
            return {...historyState,
                historyBasket:[...historyState.historyBasket,action.payload]};
        case "REMOVE_FROM_HISTORY":
            return {...historyState,
                historyBasket:historyState.historyBasket.filter((c)=>c._id!==action.payload._id)}
        case "CLEAR_HISTORY":
            return {...historyState,historyBasket:[]};        
        default :
        return {historyState};            
    }
}