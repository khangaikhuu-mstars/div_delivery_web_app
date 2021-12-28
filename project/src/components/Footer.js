
import img1 from '../data/logo.png'
import img2 from '../data/facebook.png'
import img3 from '../data/instagram.png'
import img4 from '../data/twitter.png'
import { useState } from 'react'



export default function Footer() {
    
    //     let icon = document.querySelector("main-icon");
    //     let social = document.getElementsByClassName("social-icons")[0];
    //     let foot = document.getElementsByClassName("main-footer")[0];
    //     let info = document.getElementsByClassName('info')[0];

    //     const [show, setShow] = useState(false)
    
    //     let width = window.innerWidth
    //     console.log(icon)
    
    //     console.log(window.innerWidth)
               
    //     if (width >= 768) {
    //         icon.classList.add('border-top')     
    //     }else{
    //         social.classList.remove('border-bottom')                
    // }

    return(

        <div className="main-footer">
            <div className="container  pb-5">
              <div className="row list-unstyle pt-4">
                <div className='col-md pb-3'>
                <a href=""><img className='pe-2' src={img1}/><b>Food Delivery</b></a>
                </div>
                  {/* menu */}
                  <div className="col">
                     <ul className="list-style fw-bold p-0">
                         <li><a>Нүүр</a></li>
                         <li><a>Хоолны цэс</a></li>
                         <li><a>Хүргэлтийн бүс</a></li>
                     </ul>
                  </div>
                    {/* contact us */}
                  <div className="col">
                        <a href=""><p className='fw-bold text-white'>Холбоо барих </p></a>
                  <ul className="list-style2 text-white">
                         <li>(976) 77123456</li>
                         <li>(976) 99489843</li>
                     </ul>
                  </div>
              </div>
            <div className='main-icon row'>
              <div className="social-icons col-md">
                  <a href=""><img src={img2} alt="" /></a>
                  <a href=""><img src={img3} alt="" /></a>
                  <a href=""><img src={img4} alt="" /></a>
              </div>
              <div className='info col-md'>
                <ul className='text-white p-0 list-styled-change'>
                    <li>Нууцлалын бодлого</li>
                    <li>Үйлчилгээний нөхцөл</li>
                </ul>
              </div>
            </div>


            <div className='copyright'>
                <div>
               <p className='Copyright'>© 2020 MStars Foods LLC </p>
                </div>
            </div>
            </div>
        </div>
       
       )
    }
    
