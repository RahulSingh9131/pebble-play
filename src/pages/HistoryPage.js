import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import HistoryCard from '../components/HistoryCard';
import Sidebar from '../components/Sidebar';
import { useHistory } from '../context/HistoryContext';
import "../css/main.css";
import useDocumentTitle from './useDocumentTitle';

function HistoryPage() {
    useDocumentTitle("historyPage");
    const {historyState:{historyBasket}}=useHistory();
  return (
    <div className='historypage'>
        <Header/>
        <section className='likepage-body'>
          <div className='container'>
            <Sidebar/>
            <div className='flex flex-wrap'>
              {historyBasket && historyBasket.map(({_id,image,title,timestamp,views,category})=>{
                return (
                  <HistoryCard _id={_id} image={image} title={title} timestamp={timestamp} views={views} category={category} />
                )
              })}
            </div>
          </div>
        </section>
        <Footer/>
    </div>
  )
}

export default HistoryPage