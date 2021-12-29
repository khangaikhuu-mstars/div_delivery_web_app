
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
                        <a href=""><p className='fw-bold text-white mb-2'>Холбоо барих </p></a>
                  <ul className="list-style2 text-white">
                         <li>(976) 77123456</li>
                         <li>(976) 99489843</li>
                     </ul>
                  </div>
              </div>

              <div className='aboutus row'> 
                  <div className="socialize text-white col-md">
                    <div className="social-main">
                      <div className='connect-we'>Бидэнтэй нэгдээрэй</div>
                      <div className='social-icons'>
                        <a href=""><img src={img2} alt="" /></a>
                        <a href=""><img src={img3} alt="" /></a>
                        <a href=""><img src={img4} alt="" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="about-and-policy text-white col-md p-0">
                       <a href=""><p className='policy mb-0'>Нууцлалын бодлого</p></a>
                       <a href=""><p>Үйлчилгээний нөхцөл</p></a>
                  </div>
                <div className='copyright col-lg p-0'>
                  <p className='mb-0 llc' >© 2020 MStars Foods LLC </p>
                  <p className='law'>Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
                </div>
              </div>
            </div>
        </div>
       
       )
    }
    
