import React,{useEffect} from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import WatchCard from '../components/WatchCard';
import { useLike } from '../context/LikeContext';
import "../css/main.css";
import useDocumentTitle from './useDocumentTitle';

function Likepage() {
   
    useDocumentTitle("likePage");
    const {likeState:{likeBasket}}=useLike();

  return (
    <div className='likepage'>
        <Header/>
        <section className='likepage-body'>
          <div className='container'>
            <Sidebar/>
            <div className='flex flex-wrap'>
              {likeBasket && likeBasket.map(({_id,image,title,timestamp,views,category})=>{
                return (
                  <WatchCard _id={_id} image={image} title={title} timestamp={timestamp} views={views} category={category} />
                )
              })}
            </div>
          </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Likepage