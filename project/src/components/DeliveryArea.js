import { useState, useEffect } from "react";
import Map from "./Map";
import React from "react";

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
        <img src="img/location.png" alt="" /> {data.Area}
      </li>
    </ul>
  ));
  return (
    <div className="main-area-contents">
      <div className="map3">
        <Map />
      </div>
      <div className="container p-0">
        <div className="name ps-2">
          <h4>Хүргэлтийн бүс</h4>
        </div>
        <div className="map">
          <Map />
        </div>
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
      <div className="map2">
        <Map />
      </div>
    </div>
  );
}

export default DeliveryArea;
