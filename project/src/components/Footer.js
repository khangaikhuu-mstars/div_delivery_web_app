
import img1 from '../data/logo.png'
import img2 from '../data/facebook.png'
import img3 from '../data/instagram.png'
import img4 from '../data/twitter.png'

import { useState } from 'react'

export default function Footer() {

    const [media, setMedia] = useState('Бидний тухай')

    return(
        <div className="main-footer">
            <div className="container pt-4">
                <div>
                <a href=""><img className='pe-2' src={img1}/><b>Food Delivery</b></a>
                </div>
              <div className="row list-unstyle pt-4">
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

              <div className="social-icons">
                  <a href=""><img src={img2} alt="" /></a>
                  <a href=""><img src={img3} alt="" /></a>
                  <a href=""><img src={img4} alt="" /></a>
              </div>
                  <hr className='bg-white border'/>
              <div className='white-border'>

              </div>

              <div className='info'>
                <ul className='text-white list-unstyled'>
                    <li>Нууцлалын бодлого</li>
                    <li>Үйлчилгээний нөхцөл</li>
                </ul>
              </div>

            </div>
            <div className='row'>
                <div className='col'>

                </div>
                <div className='col'>
               <p className='Copyright'>© 2020 MStars Foods LLC </p>
                </div>
            </div>
             
        </div>
    )
}

