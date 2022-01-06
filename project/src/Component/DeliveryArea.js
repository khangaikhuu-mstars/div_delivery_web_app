import location from "../img/location.png";
import maap from "../img/maap.png";
import { useState, useEffect } from "react";

function DeliveryArea() {
  const [area, setArea] = useState([]);
  useEffect(() => {
    fetch("/data/area.json")
      .then((response) => response.json())
      .then((data) => setArea(data));
  }, []);

  const deliveryArea = area.map((data) => (
    <ul>
      <li>
        <img src={location} alt="" /> {data.Area}
      </li>
    </ul>
  ));
  return (
    <div className="main-area-contents">
      <img className="map3 col-12" src={maap} alt="" />
      <div className="container p-0">
        <div className="name ps-2">
          <h4>Хүргэлтийн бүс</h4>
        </div>
        <img className="map col-12" src={maap} alt="" />
        <div className="area-content row mb-3">
          <div className="desc ms-0">
            <p>Хүргэлтийн бүс дэх хаягууд</p>
          </div>
          <div className="main-area col-xl">
            <div className="area-a-b">
              <p className="fw-bold pt-3">"А" Бүс</p>
            </div>
            <div className="area-list">
              <div className="first-area-list d-md-none">
                {deliveryArea.slice(0, 5)}
              </div>
              <div className="first-area-list d-none d-md-block">
                {deliveryArea.slice(0, 10)}
              </div>
              <div className="second-area-list">{deliveryArea.slice(0, 8)}</div>
            </div>
          </div>
          <div className="main-area col-xl">
            <div className="area-a-b">
              <p className="fw-bold pt-3">"Б" Бүс</p>
            </div>
            <div className="area-list">
              <div className="first-area-list d-md-none">
                {deliveryArea.slice(0, 5)}
              </div>
              <div className="first-area-list d-none d-md-block">
                {deliveryArea.slice(0, 10)}
              </div>
              <div className="second-area-list">{deliveryArea.slice(0, 8)}</div>
            </div>
          </div>
        </div>
      </div>
      <img className="map2 col-12" src={maap} alt="" />
    </div>
  );
}

export default DeliveryArea;
