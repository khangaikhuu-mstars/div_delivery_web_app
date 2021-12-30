import React from "react";
import { Card } from "react-bootstrap";

function Cards(props) {
  let productText = props.discount ? (
    <Card.Text className="text-orange">
      {props.finalPrice}
      <strike className="ms-2 text-dark">{props.price}</strike>
    </Card.Text>
  ) : (
    <Card.Text className="text-orange">{props.price}</Card.Text>
  );
  let productImage = props.discount ? (
    <div id="discounted-img">
    <Card.Img variant="top" className="img-fluid p-2" src={props.image} />
    </div>
  ) : (
    <Card.Img variant="top" className="img-fluid p-2" src={props.image} />
  );

  return (
    <div id="card-component" className="radius">
      <Card className="mt-5 radius border-0">
        <Card.Body className="position-relative z-index-1">
          {productImage}
          <Card.Title>{props.name}</Card.Title>
          {productText}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
