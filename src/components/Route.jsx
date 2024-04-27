import React from 'react'
import b1 from '../assets/bt1.png'
import b2 from '../assets/bt2.png'
import b3 from '../assets/bt3.png'
import b5 from '../assets/bt5.png'
import b6 from '../assets/bt6.png'

function Route() {
    return (
        <>
            <div id="route-map" className="content-route-map">
                <div className="container">
                    <div className="main">
                        <div className="content-route">
                            <div className="content-left">
                                <div className="head text-white">
                                    <h1>เส้นทางและอัตราค่าโดยสาร</h1>
                                </div>
                                <div className="content-search-route">
                                    <div className="sub-head">ค้นหาสถานีและสถานที่</div>
                                    <div className="input-origin top" id="input-searchorigin-elem">
                                        <label htmlFor="searchst-origin" id="islineselected">ต้นทาง</label>
                                        <input type="text" name="searchst-origin" id="searchst-origin" placeholder="เลือกสถานีต้นทาง"></input>
                                    </div>
                                    <div className="input-destination bottom" id="input-searchdest-elem">
                                        <label htmlFor="searchst-destination" id="islineselected">ปลายทาง</label>
                                        <input type="text" name="searchst-destination" id="searchst-destination" placeholder="เลือกสถานีปลายทาง" />
                                    </div>
                                    <div className="submit">
                                        <input type="button" id="goToRouteMap" value="เส้นทาง" className="btn-submit" />
                                    </div>
                                </div>
                            </div>
                            <div className="content-right">
                                <div className="content-bt" id="route1">
                                    <div className="bt-content">
                                        <a href="/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#3f3f3f' }}>
                                            <div className="sub-bt-content">
                                                <img src={b1} alt="button1" width="40" height="40" />
                                                <p>เส้นทางและอัตราค่าโดยสาร</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="bt-content">
                                        <a href="/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#3f3f3f' }}>
                                            <div className="sub-bt-content">
                                                <img src={b2} alt="button2" width="40" height="40" />
                                                <p>แผนที่บริเวณสถานี</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="bt-content">
                                        <a href="/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#3f3f3f' }}>
                                            <div className="sub-bt-content">
                                                <img src={b3} alt="button3" width="40" height="40" />
                                                <p>เวลาและความถี่การเดินทาง</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="bt-content">
                                        <a href="/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#3f3f3f' }}>
                                            <div className="sub-bt-content">
                                                <img src={b6} alt="button5" width="40" height="40" />
                                                <p>ทรัพย์สินสูญหาย</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="bt-content">
                                        <a href="/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#3f3f3f' }}>
                                            <div className="sub-bt-content">
                                                <img src={b5} alt="button4" width="40" height="40" />
                                                <p>ที่จอดรถ</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="content-bt" id="route2">
                                    <select
                                        name="routemap"
                                        style={{
                                            width: '100%',
                                            padding: '10px 10px',
                                            border: '1px solid #666666',
                                            borderRadius: '8px',
                                        }}
                                    >
                                        <option selected disabled>เลือกเมนู</option>
                                        <option value="/th/routemap/">เส้นทางและอัตราค่าโดยสาร</option>
                                        <option value="/th/areamap/">แผนที่บริเวณสถานี</option>
                                        <option value="/th/traintime-frequency/">เวลาและความถี่การเดินทาง</option>
                                        <option value="/th/lostfound/">ทรัพย์สินสูญหาย</option>
                                        <option value="/th/parkandride/">ที่จอดรถ</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Route;