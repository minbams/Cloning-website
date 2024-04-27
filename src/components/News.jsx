import React, { useState, useEffect } from 'react';
import Prev from '../assets/prev.png';
import Next from '../assets/next.png';
import Vector from '../assets/Vector.png';
import newsData from '../news';
import { Link } from "react-router-dom";

function News() {
    const [news, setNews] = useState(newsData.filter(item => item.id >= 1 && item.id <= 5));

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % news.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [news.length]);

    const goToPrevSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide === 0 ? news.length - 1 : prevSlide - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide + 1) % news.length);
    };

    return (
        <>
            <div className="container content-news">
                <div className="main">
                    <div className="head">
                        <h1>ข่าวสารและกิจกรรม</h1>
                    </div>

                    <div id="news-list" className="news-list slick-initialized slick-slider" style={{ width: '100%', display: 'inline-block', paddingTop: '40px', textAlign: '-webkit-center', paddingBottom: '0px' }}>
                        <div className="slick-list draggable">
                            <div className="slick-track" style={{ opacity: 1, width: `${(news.length * 278) + (news.length * 10)}px`, transform: `translate3d(-${currentSlide * 288}px, 0px, 0px)` }}>
                                {news.map((item, index) => (
                                    <div key={index} className="slick-slide" style={{ width: '278px' }}>
                                        <div className="box-news" style={{ width: '100%', display: 'inline-block' }}>
                                            <div className="sub-image">
                                                <img src={item.image} height="179" width="277" alt="News Image" />
                                            </div>
                                            <div className="sub-details">
                                                <p>{item.date}</p>
                                                <p>{item.description}</p>
                                            </div>
                                            <div className="btn-details">
                                                <Link to={`news/${item.id}` } tabIndex="-1" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" });}}>อ่านเพิ่มเติม<img src={Vector} width="3" height="7" alt=">" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button className="pp2-news slick-arrow" style={{}}>
                        <img src={Prev} alt="prev" width="50" height="50" onClick={goToPrevSlide} />
                    </button>
                    <button className="nn2-news slick-arrow" style={{}}>
                        <img src={Next} alt="next" width="50" height="50" onClick={goToNextSlide} />
                    </button>

                    <div className="view-details">
                        <Link to="news" className="sub-btn">ดูเพิ่มเติม<img src={Vector} alt=">" width="3" height="7" /></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;
