import { v4 as uuid } from "uuid";

export const playReducerFunc=(playState,action)=>{
    const {playlist}=playState;
    switch(action.type){
        case "ADD_NEW_PLAYLIST":
            return {...playState,
                playlist:[...playState.playlist,{playlistName:action.payload,playlistId:uuid(),videoInPlaylist:[]}]};
        case "DELETE_PLAYLIST":
            return {...playState,
            playlist:playState.playlist.filter((c)=>c.playlistId!==action.payload)};  
        case "ADD_VIDEO_TO_PLAYLIST":
            const { currentPlayId, modalItem } = action.payload;
            const findPlayListobj = playlist.find((item) => item.playlistId === currentPlayId);
            const { videoInPlaylist } = findPlayListobj;
            const findVideoInPlayList = videoInPlaylist.find(
              (item) => item._id === modalItem._id
            );
            if (findVideoInPlayList) {
              const updatedPlayList = playlist.map((item) =>
                item.playlistId === findPlayListobj.playlistId
                  ? {
                      ...item,
                      videoInPlaylist: item.videoInPlaylist.filter((item) => item._id !== findVideoInPlayList._id),
                    }
                  : item
              );
              return { ...playState, playlist: [...updatedPlayList] };
            } else {
              const updatedPlayList = playlist.map((item) =>
                item.playlistId === findPlayListobj.playlistId
                  ? { ...item, videoInPlaylist: [...item.videoInPlaylist, modalItem] }
                  : item
              );
              return { ...playState, playlist: [...updatedPlayList] };
            }   
        case "REMOVE_FROM_PLAYLIST":
          const {_id,playlistDetail}=action.payload;
          const {playlistId} = playlistDetail;
          const findVideoPlayListobj = playlist.find((item) => item.playlistId === playlistId);
          const updatedAfterRemove = playlist.map((item) => item.playlistId === findVideoPlayListobj.playlistId ? {
            ...item,
            videoInPlaylist: item.videoInPlaylist.filter((item) => item._id !== _id)
          } : item
          
          )
          return {...playState,playlist:[...updatedAfterRemove]};       
        default:
            return {...playState};
    }
}