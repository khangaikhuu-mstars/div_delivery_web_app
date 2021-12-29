import React from "react";
import Buttons from "./Button";
import "../css/App.css";
import { Col, Container } from "react-bootstrap";
import Tab from "./Tab";
import Cards from "./Card";
import { useEffect, useState } from "react";
import SeeAllButton from "./SeeAllButton";
import axios from "axios";

function App() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const axios = require("axios");
    axios.get("../data/foods.json");
  }, [Cards]);

  return (
    <div>
      <Container>
        <div id="buttons" className="mt-5">
          <Buttons value="default" className="default my-2" />
          <Buttons value="angarag" className="active-button my-2" />
          <Buttons value="default" className="noBorder my-2" />
          <SeeAllButton />
        </div>
      </Container>
      <div className="mt-5" id="tabs">
        <Tab />
      </div>
      <div className="container">
        <div id="cards">
          <div className="row space-between align-items-center">
            {foods.map((food) => {
              return (
                <Col xs={6} lg={3}>
                  <Cards
                    name={food.name}
                    price={food.price}
                    thumbnail={food.thumb_img}
                  />
                </Col>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
