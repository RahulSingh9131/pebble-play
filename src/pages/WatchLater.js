import React,{useEffect} from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import WatchCard from '../components/WatchCard';
import { useWatch } from '../context/WatchContext'
import "../css/main.css";

function WatchLater() {

    useEffect(()=>{
        document.title="watchlater";
    },[])

    const {watchState:{watchBasket}}=useWatch();

  return (
    <div className='watchlater'>
        <Header/>
        <section className='watchlater-body'>
          <div className='container'>
            <Sidebar/>
            <div className='flex flex-wrap'>
              {watchBasket && watchBasket.map(({_id,image,title,timestamp,views,category})=>{
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

export default WatchLater