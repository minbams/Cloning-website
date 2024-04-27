import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Vector from '../assets/Vector.png';
import newsData from '../news';

function AllNews() {
    const [news, setNews] = useState(newsData);

    const beforeStyle = {
        content: '""',
        position: 'absolute',
        left: '10px',
        bottom: '33px',
        width: '1%',
        height: '36px',
        borderRadius: '100px',
        background: '#fad53d',
      };

    const removeBefore = {
        fontSize: '14px',
        lineHeight: '19px',
        height: '39px',
        content: 'none'
    };
    

    return (
        <>
            <Helmet>
                <title>ข่าวสารและกิจกรรม</title>
            </Helmet>
            <Nav />
            <Banner />
            <div className="container page-content">
                <div className="main">
                    <div className="content">
                        <div className="head">
                            <h1>ข่าวสารและกิจกรรม</h1>
                        </div>
                        <div className="sub-content">
                            <div id="news-list" className="news-list" style={{
                                width: "100%",
                                paddingTop: "30px",
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                                gap: "1rem",
                                marginBottom: "60px"
                            }}>
                                {news.map(item => (
                                    <div key={item.id} className="box-news" style={{
                                        background: '#ffffff',
                                        boxShadow: '0px 2px 7px rgba(0, 0, 0, 0.12)',
                                        borderRadius: '8px',
                                        paddingBottom: '10px',
                                        marginBottom: '10px',
                                        width: 'auto',
                                        height: 'auto'
                                    }}>
                                        <div className="sub-image">
                                            <img src={item.image} height="200" alt="News" style={{
                                                width: '100%',
                                                height: '180px',
                                                objectFit: 'cover',
                                                objectPosition: 'bottom'
                                            }} />
                                        </div>
                                        <div className="sub-details" style={{
                                            fontSize: '12px',
                                            paddingLeft: '20px',
                                            paddingTop: '14px',
                                            paddingRight: '10px',
                                            position: 'relative',
                                            margin: '0'
                                        }}>
                                            <div style={beforeStyle}></div>
                                            <p style={{ color: '#9f9f9f' }}>{item.date}</p>
                                            <p style={ removeBefore }>{item.description}</p>
                                        </div>

                                        <div className="btn-details">
                                            <Link to={`${item.id}`} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ fontSize: '12px' }}>อ่านเพิ่มเติม
                                                <img src={Vector} width="3" height="7" alt=">" style={{ left: '80px', top: '14px', height: 'auto' }} />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default AllNews;
