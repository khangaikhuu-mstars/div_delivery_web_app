import React from "react";
import { Card } from "react-bootstrap";
import { useState } from "react";

function Cards(props) {
  console.log(props)
    return (
      <div id="discountComponent">
        <Card className="mt-5 radius">
          <Card.Img variant="top" src={props.thumbnail}/>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text className="text-orange">{props.finalPrice}<strike className="ms-2 text-dark">{props.price}</strike></Card.Text>
          </Card.Body>
        </Card>
      </div>
    );



}

export default Cards;
