export const watchReducerFunc=(watchState,action)=>{
    switch(action.type){
        case "ADD_TO_WATCHLATER":
            return {...watchState,watchBasket:[...watchState.watchBasket,action.payload]};
        case "REMOVE_FROM_WATCHLATER":
            return {...watchState,
                watchBasket:watchState.watchBasket.filter((c)=>c._id!==action.payload._id)};    
        default:
        return {watchState};
    }
}