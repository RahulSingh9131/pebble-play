import React from 'react';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import "../css/main.css";

function Sidebar() {
  return (
    <div className='sidebar'> 
        <div className='sidebar-contents'>
            <HistoryIcon/>
        </div>
        <div className='sidebar-contents'>
            <WatchLaterOutlinedIcon/>
        </div>
        <div className="sidebar-contents">
            <ThumbUpOutlinedIcon/>
        </div>
    </div>
  )
}

export default Sidebar