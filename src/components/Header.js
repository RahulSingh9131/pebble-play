import { Avatar } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import React from 'react';
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className='header'>
        <header>
            <div className="navigation-container">
                    <div className="left">
                        <Link to="/" className='brand-name'>
                           <h1>PebblePlay</h1>
                        </Link>
                    </div>
                    <div className="middle">
                        <input type="search" placeholder="search here.." id="search-input"/>
                        <label htmlFor="search-input" className="fas fa-search"></label>
                    </div>
                    <div className="right">
                        <nav className="nav-links flex align-center">
                            <Link to="/playlist" className='header-nav-icons'><PlaylistPlayIcon/></Link>
                            <Link to="/logout" className='header-nav-icons'><Avatar /></Link>
                        </nav>
                    </div>
                </div>
        </header>
    </div>
  )
}

export default Header