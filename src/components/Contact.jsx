import React from 'react'
import Twitter from '../assets/yellowedm.png'
import Facebook from '../assets/facebook.png'
import Line from '../assets/pinkyellowline.jpg'
import Youtube from '../assets/yellowline.png'

function Contact() {
    return (
        <>
            <div className="container contact-css">
                <div className="main">
                    <div className="content-contact">
                        <div className="content-left">
                            <div className="head">
                                <h1>
                                    ติดต่อสอบถาม <br />
                                    และติดตามข่าวสาร
                                </h1>
                            </div>
                            <div className="content">
                                <div className="sub-content">
                                    <div className="sub-hand">ศูนย์ลูกค้าสัมพันธ์</div>
                                    <div className="details">
                                        ติดต่อ 0 2617 6111 ทุกวันเวลา : 06.00 - 24.00 น.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="content-right"
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginTop: '30px'
                            }}
                        >
                            <div className="content-img sub-image-contact">
                                <div className="sub-contact figure" id="link-fb">
                                    <a
                                        href="https://www.facebook.com/MRTYellowLine/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: '#3f3f3f' }}
                                    >
                                        <img
                                            className="Sirv image-main"
                                            src={Facebook}
                                            alt="facebook"
                                            width="63"
                                        />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/MRTYellowLine/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#3f3f3f',
                                            textAlign: '-webkit-center'
                                        }}
                                    >
                                        รถไฟฟ้ามหานคร สายสีเหลือง
                                    </a>
                                </div>
                                <div className="sub-contact figure" id="link-line">
                                    <a
                                        href="https://lin.ee/cFw4cid"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: '#3f3f3f' }}
                                    >
                                        <img
                                            className="Sirv image-main"
                                            src={Line}
                                            alt="line"
                                            width="63"
                                        />
                                    </a>
                                    <a
                                        href="https://lin.ee/cFw4cid"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#3f3f3f',
                                            textAlign: '-webkit-center'
                                        }}
                                    >
                                        Pinkyellowline
                                    </a>
                                </div>
                                <div className="sub-contact figure" id="link-yt">
                                    <a
                                        href="https://www.youtube.com/channel/UC2ZS8J5rnnemZ_F1KMuV0iA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: '#3f3f3f' }}
                                    >
                                        <img
                                            className="Sirv image-main"
                                            src={Youtube}
                                            alt="yt"
                                            width="63"
                                        />
                                    </a>
                                    <a
                                        href="https://www.youtube.com/channel/UC2ZS8J5rnnemZ_F1KMuV0iA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#3f3f3f',
                                            textAlign: '-webkit-center'
                                        }}
                                    >
                                        YellowLineofficial
                                    </a>
                                </div>
                                <div className="sub-contact figure" id="link-tw">
                                    <a
                                        href="https://twitter.com/YellowLine_ebm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: '#3f3f3f' }}
                                    >
                                        <img
                                            className="Sirv image-main"
                                            src={Twitter}
                                            alt="tw"
                                            width="63"
                                        />
                                    </a>
                                    <a
                                        href="https://twitter.com/YellowLine_ebm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#3f3f3f',
                                            textAlign: '-webkit-center'
                                        }}
                                    >
                                        @YellowLine_ebm
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact