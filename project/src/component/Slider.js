import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../css/slider.css';
import webBg from '../images/web-bg.png';
import webMealPic from '../images/web-meal-pic.png';
import webB2 from '../images/web-b2.png';
import webB3 from '../images/web-b3.png';
import Button from './Button'
function Slider() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className="header-slider">

                    <div className="slider-bg">
                        <img className="main-slider-img" src={webBg} alt="" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="slider-content-img">
                                    <img className="img-fluid" src={webMealPic} alt="" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="main-text me-3">
                                    <h1 className="slider-text1 ">MStars</h1>
                                    <h1 className="slider-text1">Food delivery</h1> 
                                    <div className="line d-none d-md-block my-3"></div>
                                    <p className="slider-text2">Хосгүй амтыг хормын дотор хүргэж өгнө.</p>
                                    <Button className='active-button radius d-none d-lg-block' value="→"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="header-slider">
                    <div className="slider-bg">
                        <img className="main-slider-img" src={webB2} alt="" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                
                            </div>
                            <div className="col-6">
                                <div className="main-text text-white">
                                    <h1 className="slider-text me-3">Сэт хоол тун удахгүй</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="header-slider">
                    <div className="slider-bg">
                        <img className="main-slider-img" src={webB3} alt="" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                
                            </div>
                            <div className="col-6">
                                <div className="main-text text-white">
                                    <h1 className="slider-text me-3">Тун удахгүй...</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}
export default Slider