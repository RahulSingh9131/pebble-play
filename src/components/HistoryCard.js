import { Avatar } from '@mui/material';
import React from 'react'
import { useHistory } from '../context/HistoryContext';
import {Link} from "react-router-dom";

function HistoryCard(videos) {
    const {_id,image,title,category,views,timestamp}=videos;
    const {historyDispatch}=useHistory();
  return (
    <div>
        <div className='watchcard' key={_id}>
            <Link to={`/videopage/${_id}`}>
               <img className='watchcard-thumbnail' src={image} alt={title}/>
            </Link>
            <div className='watchcard-info'>
                <Avatar className="watchcard-avatar" src={image} alt={title}/>
                <div className="watchcard-text">
                    <h4>{title}</h4>
                    <p>{category}</p>
                    <p>
                        {views} * {timestamp}
                    </p>
                    <button className='videocard-button' onClick={()=>historyDispatch({type:"REMOVE_FROM_HISTORY",payload:videos})}>Remove From History</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HistoryCard