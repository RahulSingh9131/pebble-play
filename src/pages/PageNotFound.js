import React from 'react';
import {Link} from "react-router-dom";
import useDocumentTitle from './useDocumentTitle';

function PageNotFound() {

    useDocumentTitle("ERROR");

  return (
    <div className='notfound'>
        <div className='notfound-contents center-text'>
            <h2>ERROR 404!!!</h2>
            <Link to="/videopage"><small> Back to videos</small></Link>
        </div>
    </div>
  )
}

export default PageNotFound