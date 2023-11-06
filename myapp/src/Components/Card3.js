import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { Button } from "react-bootstrap";
import{ AiOutlineRight }from 'react-icons/ai'

const Card3 = () => {
  const sliderRef = useRef(null);

  const CustomPrevArrow = (props) => (
    <div className="custom-arrow custom-prev-arrow" onClick={props.onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );

  const CustomNextArrow = (props) => (
    <div className="custom-arrow custom-next-arrow" onClick={props.onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );




  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: true,
    autoplaySpeed:2000,
  };
  const images = [
    { src: "https://www.keralatourism.org/images/festivals/home-thumb/20170710102310_123_1.jpg",name:"Athachamayam" },
    {src:"https://www.keralatourism.org/images/festivals/home-thumb/20171222121145_317_1.jpg",name:"Thiruvonam"},
    {src:"https://www.keralatourism.org/images/festivals/home-thumb/20131104154213_40_1.jpg",name:"Pulikali"},
    {src:"https://www.keralatourism.org/images/festivals/home-thumb/20180510222310_225_1.jpg",name:"Manarcad Perunnal"},
    {src:"https://www.keralatourism.org/images/festivals/home-thumb/20131031143502_34_1.jpg",name:"Aranmula Boat Race"},
    {src:"https://www.keralatourism.org/images/festivals/home-thumb/20181025114456_370_1.jpg",name:"Feast of Holy Cross Shrine"},
    {src:"https://www.keralatourism.org/images/festivals/home-thumb/20181025114252_241_1.jpg",name:"Neelamperoor Padayani"},
    {src:"https://www.keralatourism.org/images/festivals/home-thumb/20181116112247_371_1.jpg",name:"Feast of Vallarpadathamma"},
    {src:"https://www.keralatourism.org/images/festivals/home-thumb/20190918105229_237_1.jpg",name:"Navarathri Sangeetholsavam"},
    {src:"https://www.keralatourism.org/images/festivals/home-thumb/20181108082213_233_1.jpg",name:"Navarathri Festival"},

     
    
    
   
    
    
  ];

 
  return (
    <div className="card33">
    <div className="slidee" style={{ width: "100%", overflow: "hidden", position: "relative" }}>
      <h2>What's Happening</h2>
    <Slider ref={sliderRef} {...settings}>
        {images.map((imag, index) => (
          <div key={index} className="carousel-slide">
            <img src={imag.src} alt={`Imag ${index + 1}`} />
            <div className="carousel-slide-content">
              {/* Move the h4 tag inside the carousel-slide-content div */}
              <h4>{imag.name}</h4>
              {/* <div className="imag-description">{imag.description}</div> */}
            </div>
          </div>
        ))}
      </Slider>
    <div className="carousel-indicators1">
      {/* Left slider indicator button */}
      <div
        className="slider-indicator-left"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      {/* Right slider indicator button */}
      <div
        className="slider-indicator-right"
        onClick={() => sliderRef.current.slickNext()}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>

    <Button className="cta1">MORE FESTIVALS <AiOutlineRight/></Button>
  </div>
  </div>
  );
};

export default Card3;
