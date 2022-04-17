import React from 'react';
import {Link} from "react-router-dom";
import useDocumentTitle from './useDocumentTitle';
import "../css/main.css";


function LogoutPage() {

    useDocumentTitle("logout");

  return (
    <div className='logout'>
        <div className='logout-contents center-text'>
            <h5>logged out successfully!!!</h5>
            <Link to="/"><small> Back to homePage</small></Link>
        </div>
    </div>
  )
}

export default LogoutPage