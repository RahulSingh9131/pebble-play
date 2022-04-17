import React from 'react';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {Link,NavLink} from "react-router-dom";
import "../css/main.css";

const getActiveStyle = ({ isActive }) => ({
  color: isActive ? "red" : ""
});

function Sidebar() {
  return (
    <div className='sidebar'> 
      <div className='sidebar-contents'>
          <NavLink className='sidebar-links' style={getActiveStyle} to="/videopage">
            <span className='tooltip-text'>Home</span>
            <HomeOutlinedIcon/>
          </NavLink>
        </div>
        <div className='sidebar-contents'>
          <NavLink className='sidebar-links' style={getActiveStyle} to="/historypage">
            <span className='tooltip-text'>History</span>
            <HistoryIcon/>
          </NavLink>
        </div>
        <div className='sidebar-contents'>
          <NavLink className='sidebar-links' style={getActiveStyle} to="/watchlater">
            <span className='tooltip-text'>WatchLater</span>
            <WatchLaterOutlinedIcon/>
          </NavLink>
        </div>
        <div className="sidebar-contents">
          <NavLink className='sidebar-links' style={getActiveStyle} to="/likepage">
            <span className='tooltip-text'>Like</span>
            <ThumbUpOutlinedIcon/>
          </NavLink>
        </div>
    </div>
  )
}

export default Sidebar