import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="main-footer mt-5">
      <div className="container  pb-5">
        <div className="row list-unstyle pt-4">
          <div className="col-md pb-3">
            <NavLink className="nav-link" to="/">
              <img className="pe-2" src="/icons/logos.svg" />
              <b>Food Delivery</b>
            </NavLink>
          </div>
          <div className="col">
            <ul className="list-style fw-bold p-0">
              <li>
                <NavLink className="nav-link" to="/">
                  Нүүр
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/menu">
                  Хоолны цэс
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/area">
                  Хүргэлтийн бүс
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col">
            <Nav.Link className="ps-0 ">
              <p className="call fw-bold mb-2 ">Холбоо барих </p>
            </Nav.Link>
            <ul className="p-0 ">
              <li>(976) 77123456</li>
              <li>(976) 99489843</li>
            </ul>
          </div>
        </div>
        <div className="aboutus row">
          <div className="socialize  col-md">
            <div className="social-main">
              <div className="connect-we text-white">Бидэнтэй нэгдээрэй</div>
              <div className="social-icons">
                <Nav.Link>
                  <img src="img/fb.png" alt="" />
                </Nav.Link>
                <Nav.Link>
                  <img src="img/twitter.png" alt="" />
                </Nav.Link>
                <Nav.Link>
                  <img src="img/ig.png" alt="" />
                </Nav.Link>
              </div>
            </div>
          </div>
          <div className="about-and-policy  col-md p-0">
            <NavLink to="/confidentiality" className="nav-link">
              <p className="policy mb-0">Нууцлалын бодлого</p>
            </NavLink>
            <NavLink to="/policy" className="nav-link">
              <p>Үйлчилгээний нөхцөл</p>
            </NavLink>
          </div>
          <div className="copyright col-lg  text-end p-0">
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
