import img1 from "../data/logo.png";
import img2 from "../data/facebook.png";
import img3 from "../data/instagram.png";
import img4 from "../data/twitter.png";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container  pb-5">
        <div className="row list-unstyle pt-4">
          <div className="col-md pb-3">
            <a href="">
              <img className="pe-2" src={img1} />
              <b>Food Delivery</b>
            </a>
          </div>
          <div className="col">
            <ul className="list-style fw-bold p-0">
              <li>
                <a>Нүүр</a>
              </li>
              <li>
                <a>Хоолны цэс</a>
              </li>
              <li>
                <a>Хүргэлтийн бүс</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <a href="">
              <p className="fw-bold text-white mb-2">Холбоо барих </p>
            </a>
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
                <a href="">
                  <img src={img2} alt="" />
                </a>
                <a href="">
                  <img src={img3} alt="" />
                </a>
                <a href="">
                  <img src={img4} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="about-and-policy text-white col-md p-0">
            <a href="">
              <p className="policy mb-0">Нууцлалын бодлого</p>
            </a>
            <a href="">
              <p>Үйлчилгээний нөхцөл</p>
            </a>
          </div>
          <div className="copyright col-lg text-white text-end p-0">
            <p className="mb-0 pe-3 pe-md-0">© 2020 MStars Foods LLC </p>
            <p className="d-none d-md-block">Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
