import arrow from "../img/arrow.png";
import location from "../img/location.png";
import map from "../img/map.png"

function DeliveryArea() {
  return (
    <div>
        <div className="titled d-flex">
            <img src={arrow} alt="" />
          <div className="name">
            <h4>Хүргэлтийн бүс</h4>
          </div>
          <div></div>
        </div>
        <img className="map3" src={map} alt="" />
      <div className="container p-0">
        <img className="map" src={map} alt="" />
        <div className="area-content row mb-3">
          <div className="desc">
            <p>Хүргэлтийн бүс дэх хаягууд</p>
          </div>
          <div className="main-area col-xl">
            <div className="area-a-b">
              <p className="fw-bold pt-3">"А" Бүс</p>
            </div>
            <div className="area-list">
              <ul>
                <li className="">
                  <img src={location} alt="" /> Хоймор хотхон
                </li>
                <hr className="line" />
                <li className="">
                  <img src={location} alt="" /> 45-р байр
                </li>
                <hr className="line" />
                <li className="">
                  <img src={location} alt="" /> Оранж хотхон
                </li>
                <hr className="line" />
                <li className="">
                  <img src={location} alt="" /> 3-р байр
                </li>
                <hr className="line" />
                <li className="">
                  <img src={location} alt="" /> 33-р байр
                </li>
                <hr className="line" />
                <li className="noned">
                  <img src={location} alt="" /> 3-р байр
                </li>
                <li className="noned">
                  <img src={location} alt="" /> 33-р байр
                </li>
              </ul>
              <div className="second-area-list">
              <ul>
                <li className="">
                  <img src={location} alt="" /> Хоймор хотхон
                </li>
                <li className="">
                  <img src={location} alt="" /> 45-р байр
                </li>
                <li className="">
                  <img src={location} alt="" /> Оранж хотхон
                </li>
                <li className="">
                  <img src={location} alt="" /> 3-р байр
                </li>
                <li className="">
                  <img src={location} alt="" /> 33-р байр
                </li>
                <li className="">
                  <img src={location} alt="" /> 3-р байр
                </li>
                <li className="">
                  <img src={location} alt="" /> 33-р байр
                </li>
              </ul>
              </div>
            </div>
          </div>
          <div className="main-area col-xl">
            <div className="area-a-b">
              <p className="fw-bold pt-3">"Б" Бүс</p>
            </div>
            <div className="area-list">
              <ul>
                <li className="">
                  <img src={location} alt="" /> Хоймор хотхон
                </li>
                <hr className="line" />
                <li className="">
                  <img src={location} alt="" /> 45-р байр
                </li>
                <hr className="line" />
                <li className="">
                  <img src={location} alt="" /> Оранж хотхон
                </li>
                <hr className="line" />
                <li className="">
                  <img src={location} alt="" /> 3-р байр
                </li>
                <hr className="line" />
                <li className="">
                  <img src={location} alt="" /> 33-р байр
                </li>
                <hr className="line" />
                <li className="noned">
                  <img src={location} alt="" /> 3-р байр
                </li>
                <li className="noned">
                  <img src={location} alt="" /> 33-р байр
                </li>
              </ul>
              <div className="second-area-list">
              <ul>
                <li className="">
                  <img src={location} alt="" /> Хоймор хотхон
                </li>
                <li className="">
                  <img src={location} alt="" /> 45-р байр
                </li>
                <li className="">
                  <img src={location} alt="" /> Оранж хотхон
                </li>
                <li className="">
                  <img src={location} alt="" /> 3-р байр
                </li>
                <li className="">
                  <img src={location} alt="" /> 33-р байр
                </li>
                <li className="">
                  <img src={location} alt="" /> 3-р байр
                </li>
                <li className="">
                  <img src={location} alt="" /> 33-р байр
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
         <img className="map2" src={map} alt="" />
    </div>
  );
}

export default DeliveryArea;
