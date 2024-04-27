import React from 'react'
import Vector from '../assets/Vector.png'

function Article() {
    return (
        <>
            <div id="article" className="content-article">
                <div className="container">
                    <div className="main">
                        <div className="head">
                            <h1>บทความ</h1>
                        </div>

                        <div id="article-list" className="article-list" style={{ width: '100%', display: 'inline-block', textAlign: '-webkit-center', paddingTop: '40px' }}>
                            ติดตามบทความได้ในเร็ว ๆ นี้
                        </div>

                        <div className="view-details">
                            <a href="/" className="sub-btn">
                                ดูเพิ่มเติม
                                <img src={Vector} alt=">" width="3" height="7" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Article