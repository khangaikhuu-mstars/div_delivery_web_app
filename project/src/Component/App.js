import React from "react";
import Buttons from "./Button";
import "../css/App.css";
import { Col, Container } from "react-bootstrap";
import Tab from "./Tab";
import Cards from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios.get("http://52.221.191.153/api/foods").then((response) => {
      console.log(response)
      setFoods(response.data.data);
    });
  }, [Cards]);

  return (
    <div>
      <Container>
        <div id="buttons" className="mt-5">
          <Buttons value="default" className="default my-2" />
          <Buttons value="angarag" className="active-button my-2" />
          <Buttons value="default" className="noBorder my-2" />
          <Buttons className="see-all-mn my-2" />
          <Buttons className="see-all-en my-2" />
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
                <Col lg={3}>
                  <Cards
                    name={food.name}
                    price={food.price}
                    thumbnail={food.tumb_img}
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
