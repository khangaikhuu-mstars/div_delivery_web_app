import React from "react";
import { Card } from "react-bootstrap";
import { useState } from "react";

function Cards(props) {
  console.log(props)
  const [onDiscount, setOnDiscount] = useState(false);
  const [finalPrice, setDiscount] = useState(props.price - props.price * 0.2);
    return (
      <div id="discountComponent">
        <Card className="mt-5 radius">
          <Card.Img variant="top" src="../../public/images/food/italian_pizza.png"/>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text className="text-orange">{finalPrice}<strike className="ms-2 text-dark">{props.price}</strike></Card.Text>
          </Card.Body>
        </Card>
      </div>
    );



}

export default Cards;
