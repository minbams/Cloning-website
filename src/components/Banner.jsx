import React, { useState, useEffect } from 'react';
import Prev from '../assets/prev.png'
import Next from '../assets/next.png'
import Banner1 from '../assets/banner1.jpg'
import Banner2 from '../assets/banner2.jpg'
import Banner3 from '../assets/banner3.jpg'

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [Banner1, Banner2, Banner3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="container-2">
      <div className="main">
        <div className="banner-homepage slick-initialized slick-slider slick-dotted" id="banner-homepage">
          <div className="slick-list draggable">
            <div className="slick-track" style={{ width: `${slides.length * 100}%`, transform: `translate3d(-${currentSlide * (100 / slides.length)}%, 0, 0)` }}>
              {slides.map((slide, index) => (
                <div className={`slick-slide ${index === currentSlide ? 'slick-current slick-active' : ''}`} key={index} data-slick-index={index} aria-hidden={index !== currentSlide} style={{ width: `${100 / slides.length}%`, display: 'inline-block' }}>
                  <div style={{ width: '100%' }}>
                    <img src={slide} alt={`Banner${index + 1}`} style={{ width: '100%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ul className="slick-dots" style={{}} role="tablist">
            {slides.map((_, index) => (
              <li className={index === currentSlide ? 'slick-active' : ''} key={index} role="presentation">
                <button type="button" role="tab" id={`slick-slide-control${index}`} aria-controls={`slick-slide${index}`} aria-label={`${index + 1} of ${slides.length}`} tabIndex={index === currentSlide ? '0' : '-1'} onClick={() => goToSlide(index)}>{index + 1}</button>
              </li>
            ))}
          </ul>
        </div>
        <button className="pp2 slick-arrow" style={{}} onClick={goToPrevSlide}>
          <img src={Prev} alt="prev" width="50" height="50" />
        </button>
        <button className="nn2 slick-arrow" style={{}} onClick={goToNextSlide}>
          <img src={Next} alt="next" width="50" height="50" />
        </button>
      </div>
    </div>
  );
}

export default Banner;

