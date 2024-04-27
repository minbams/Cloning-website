import React, { useState, useEffect } from 'react';
import Prev from '../assets/prev.png';
import Next from '../assets/next.png';
import Vector from '../assets/Vector.png';

function Library() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Define your library data
    const libraryData = [
        {
            title: "ระบบความปลอดภัย",
            details: "Safety System",
            buttonText: "เพิ่มเติม"
        },
        {
            title: "ระบบรักษาความปลอดภัย",
            details: "Security System",
            buttonText: "เพิ่มเติม"
        },
        {
            title: "รายงานประจำปี",
            details: "Annual Report",
            buttonText: "เพิ่มเติม"
        },
        {
            title: "ระบบรถไฟฟ้า",
            details: "Railway Operating System",
            buttonText: "เพิ่มเติม"
        },
        {
            title: "ระบบโครงสร้างทางวิ่งและสถานี",
            details: "Structure of Routes and Stations",
            buttonText: "เพิ่มเติม"
        },
        {
            title: "ระบบอาณัติสัญญาณ",
            details: "Signal Systemx",
            buttonText: "เพิ่มเติม"
        },
        {
            title: "ระบบซ่อมบำรุง",
            details: "Maintenance System",
            buttonText: "เพิ่มเติม"
        },
        {
            title: "ระบบบัตรโดยสาร",
            details: "Ticketing System",
            buttonText: "เพิ่มเติม"
        },
    ];

    useEffect(() => {
        // Set up an interval to auto-slide
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % libraryData.length);
        }, 5000); // Change the interval duration as needed

        // Clear the interval on component unmount
        return () => clearInterval(interval);
    }, [libraryData.length]);

    // Function to go to the previous slide
    const goToPrevSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide === 0 ? libraryData.length - 1 : prevSlide - 1));
    };

    // Function to go to the next slide
    const goToNextSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide + 1) % libraryData.length);
    };

    return (
        <>
            <div id="elibrary" className="content-elibrary">
                <div className="container">
                    <div className="main">
                        <div className="head">
                            <h1>E-Library</h1>
                        </div>

                        {/* Render the library data dynamically */}
                        <div id="elibrary-list" className="elibrary-list slick-initialized slick-slider" style={{ width: '100%', display: 'inline-block', paddingTop: '40px', textAlign: '-webkit-center' }}>
                            <div className="slick-list draggable">
                                <div className="slick-track" style={{ opacity: 1, width: `${(libraryData.length * 374) + (libraryData.length * 10)}px`, transform: `translate3d(-${currentSlide * 384}px, 0px, 0px)` }}>
                                    {libraryData.map((item, index) => (
                                        <div key={index} className="slick-slide" style={{ width: '374px' }}>
                                            <div className="box-elib" style={{ width: '100%', display: 'inline-block' }}>
                                                <div className="title">{item.title}</div>
                                                <div className="details">{item.details}</div>
                                                <div className="btn-elib"><a href="/">{item.buttonText}</a></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Previous and next buttons */}
                        <button className="pp2-elib slick-arrow" onClick={goToPrevSlide}>
                            <img src={Prev} alt="prev" width="50" height="50" />
                        </button>
                        <button className="nn2-elib slick-arrow" onClick={goToNextSlide}>
                            <img src={Next} alt="next" width="50" height="50" />
                        </button>

                        {/* View details link */}
                        <div className="view-details">
                            <a href="/" className="sub-btn">ดูเพิ่มเติม<img src={Vector} alt=">" width="3" height="7" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Library;
