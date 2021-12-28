import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../images/slider1.png';
import slider2 from '../images/slider2.png';
import slider3 from '../images/slider3.png';



// <div className="banner">
//     <Carousel>
//         <Carousel.Item>
//             <img
//                 src={slider1}
//                 alt="slider1"
//             />
//             <div className="header">
//                 <h1 className="food-del">Mstars Food delivery</h1>
//                 <p className="food-del-p">Хосгүй амтыг хормын дотор хүргэж өгнө.</p>
//             </div>
//         </Carousel.Item>

//         <Carousel.Item >
//             <img
//                 className="slider2"
//                 src={slider2}
//                 alt="slider2-img"
//             />
//             <h1 className="slider-text">Сэт хоол тун удахгүй</h1>
//         </Carousel.Item>

//         <Carousel.Item>
//             <img
//                 className="slider3"
//                 src={slider3}
//                 alt="slider3-img"
//             />
//             <h1 className="slider-text">Тун удахгүй...</h1>
//         </Carousel.Item>

//     </Carousel>
// </div>


function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="banner">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="slider"
                        src={slider1}

                    />
                    <div className="header">
                        <h1 className="food-del">Mstars Food delivery</h1>
                        <p className="food-del-p">Хосгүй амтыг хормын дотор хүргэж өгнө.</p>                 
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="slider2"
                        src={slider2}
                        alt="slider2-img"
                    />
                    <h1 className="slider-text">Сэт хоол тун удахгүй</h1>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="slider"
                        src={slider3}
                        alt="slider3-img"
                    />
                    <h1 className="slider-text">Тун удахгүй...</h1>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider