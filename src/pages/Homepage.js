import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import "../css/main.css";
import useDocumentTitle from './useDocumentTitle';

function Homepage() {

    const [category,setCategory]=useState([]);

    const fetchCategory= async ()=>{
        try{
            const res= await axios.get("/api/categories");
            setCategory(res.data.categories); 
        }catch(e){
            alert("error occured!! check api endpoints..");
            console.log(e);
        }
    }

    useEffect(()=>fetchCategory(),[]);
    useDocumentTitle("homePage");

    useEffect(()=>{
        let imgBtn=document.querySelectorAll('.img-btn');
        imgBtn.forEach(btn=>{
            btn.addEventListener('click',()=>{
                document.querySelector('.controls .active').classList.remove('active');
                btn.classList.add('active');
                let src=btn.getAttribute('data-src');
                document.querySelector('#image-slider').src=src;
            });
        });
    },[])

  return (
    <div className='homepage'>
        <main>
            <div className="big-wrapper">
                <header>
                    <div className="container">
                        <div className="logo">
                            <h3 ><Link to="/" className='brand-name'>PebblePlay</Link></h3>
                        </div>
                        <div className="links">
                            <ul>
                            <li><a href="https://github.com/RahulSingh9131" target="_blank">Github</a></li>
                            <li><a href="https://twitter.com/singhrahul3112" target="_blank">Twitter</a></li>
                            <li><a href="https://www.linkedin.com/in/rahul-singh-06b83917a/" target="_blank">LinkedIn</a></li>
                            <li><Link to="/login" className='btn'>LogIn</Link></li>
                            </ul>
                        </div>
                    </div>
                </header>
                <section className="banner">
                    <div className="container">
                        <div className="controls">
                            <span className="img-btn active" data-src="https://wallpapercave.com/wp/jCDL6OV.jpg"></span>
                            <span className="img-btn" data-src="https://wallpaperaccess.com/full/1512263.jpg"></span>
                            <span className="img-btn" data-src="https://w0.peakpx.com/wallpaper/156/622/HD-wallpaper-avengers-endgame-all-characters-superheroes-movies.jpg"></span>
                            <span className="img-btn" data-src="http://entertainment.time.com/wp-content/uploads/sites/3/2013/08/oblivion-poster.jpg"></span>
                            <span className="img-btn" data-src="http://www.studioremarkable.com/wp-content/uploads/2012/08/Dark-Knight-Trilogy.jpg"></span>
                            <span className="img-btn" data-src="https://www.newcanaanymca.org/wp-content/uploads/2021/11/Moana-Movie-Poster-landscape.jpg"></span>
                            <span className='img-btn' data-src="https://images.hdqwalls.com/download/black-panther-4k-movie-poster-2018-7t-1366x768.jpg"></span>
                        </div>
                        <div className="image-container">
                            <img src="https://wallpapercave.com/wp/jCDL6OV.jpg" id="image-slider" alt=""/>
                        </div>
                    </div>
                </section>
                <section className="category">
                    <div className='container'>
                        <h1 className="heading">
                            <span>c</span>
                            <span>a</span>
                            <span>t</span>
                            <span>e</span>
                            <span>g</span>
                            <span>o</span>
                            <span>r</span>
                            <span>i</span>
                            <span>e</span>
                            <span>s</span>
                        </h1>
                        <div className="box-container">
                            {category && category.map((item)=>{
                                return (
                                <div className="box">
                                    <img src={item.src} alt=""/>
                                    <div className="content">
                                        <h3>{item.categoryName}</h3>
                                        <p>{item.description}</p>
                                        <Link to="#" className="btn">see More</Link>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <footer className="bottom-area">
                    <div className="container">
                        <p>Designed and built with love. </p>
                        <small>© Rahul Singh</small>
                    </div>
                </footer>
            </div>
        </main>
    </div>
  )
}

export default Homepage