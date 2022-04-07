export const likeReducerFunc=(likeState,action)=>{
    switch(action.type){
        case "ADD_TO_LIKED":
            return {...likeState,likeBasket:[...likeState.likeBasket,action.payload]};
        case "REMOVE_FROM_LIKED":
            return {...likeState,
                likeBasket:likeState.likeBasket.filter((c)=>c._id!==action.payload._id)}    
        default:
            return {...likeState};
    }
}