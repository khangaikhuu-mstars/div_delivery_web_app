import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/slider.css";
import Button from "./Button";

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
            <img className="main-slider-img" src="images/web-bg.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="slider-content-img">
                  <img
                    className="img-fluid"
                    src="images/web-meal-pic.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="main-text me-3">
                  <h1 className="slider-text1 ">MStars</h1>
                  <h1 className="slider-text1">Food delivery</h1>
                  <div className="line d-none w-75 d-md-block my-3"></div>
                  <p className="slider-text2">
                    Хосгүй амтыг хормын дотор хүргэж өгнө.
                  </p>
                  <Button
                    className="active-button radius d-none d-lg-block"
                    value="→"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="header-slider">
          <div className="slider-bg">
            <img className="main-slider-img" src="images/web-b2.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-6"></div>
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
            <img className="main-slider-img" src="images/web-b3.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-6"></div>
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
export default Slider;
