import React from "react";
import { Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="main-footer mt-5">
      <div className="container  pb-5">
        <div className="row list-unstyle pt-4">
          <div className="col-md pb-3">
            <Nav.Link href="/">
              <img className="pe-2" src='/icons/logos.svg' />
              <b className="text-white">Food Delivery</b>
            </Nav.Link>
          </div>
          <div className="col">
            <ul className="list-style fw-bold p-0">
              <li>
                <Nav.Link className="text-white" href="/">Нүүр</Nav.Link>
              </li>
              <li>
                <Nav.Link href="/menu">Хоолны цэс</Nav.Link>
              </li>
              <li>
                <Nav.Link className="text-white" href="area">Хүргэлтийн бүс</Nav.Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <Nav.Link href="" className="ps-0 text-white">
              <p className="call fw-bold mb-2 text-white">Холбоо барих </p>
            </Nav.Link>
            <ul className="p-0 text-white">
              <li>(976) 77123456</li>
              <li>(976) 99489843</li>
            </ul>
          </div>
        </div>
        <div className="aboutus row">
          <div className="socialize text-white col-md">
            <div className="social-main">
              <div className="connect-we">Бидэнтэй нэгдээрэй</div>
              <div className="social-icons">
                <Nav.Link href="">
                  <img src='/img/fb.pmg' alt="" />
                </Nav.Link>
                <Nav.Link href="">
                  <img src='img/twitter.png' alt="" />
                </Nav.Link>
                <Nav.Link href="">
                  <img src='ig.png' alt="" />
                </Nav.Link>
              </div>
            </div>
          </div>
          <div className="about-and-policy text-white col-md p-0">
            <Nav.Link href="">
              <p className="policy mb-0  text-white">Нууцлалын бодлого</p>
            </Nav.Link>
            <Nav.Link href="">
              <p className=" text-white">Үйлчилгээний нөхцөл</p>
            </Nav.Link>
          </div>
          <div className="copyright col-lg text-white text-end p-0">
            <p className="mb-0 pe-3 pe-md-0">© 2020 MStars Foods LLC </p>
            <p className="d-none d-md-block">
              Зохиогчийн эрх хуулиар хамгаалагдсан.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
