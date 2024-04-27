import React from 'react'
import Vector from '../assets/Vector.png'
import Promotion from '../assets/promotion.jpg'

function Promo() {
    return (
        <>
            <div className="container content-promo">
                <div className="main">
                    <div className="head">
                        <h1>โปรโมชัน</h1>
                    </div>

                    <div id="promotion" style={{ textAlign: '-webkit-center', paddingTop: '40px' }} className="slick-initialized slick-slider">
                        <div className="slick-list draggable">
                            <div className="slick-track" style={{ opacity: 1, width: '1150px', transform: 'translate3d(0px, 0px, 0px)' }}>
                                <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{ width: '1150px' }}>
                                    <div>
                                        <div style={{ cursor: 'pointer', width: '100%', display: 'inline-block' }}>
                                            <img src={Promotion} width="1086" alt="Promotion" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="view-details">
                        <a href="/" className="sub-btn">
                            ดูเพิ่มเติม
                            <img src={Vector} alt=">" width="3" height="7" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Promo;