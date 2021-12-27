import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../images/slider1.png';
import slider2 from '../images/slider2.png';
import slider3 from '../images/slider3.png';

function Slider() {
    return (
        <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                    />
                    <Carousel.Caption>
                        <h1 className="food-del">Mstars Food delivery</h1>
                        <p>Хосгүй амтыг хормын дотор хүргэж өгнө.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={slider2}
                    />
                    <Carousel.Caption>
                        <h1>Сэт хоол тун удахгүй</h1>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                    />
                    <Carousel.Caption>
                        <h1>Тун удахгүй...</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider