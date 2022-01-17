import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "../css/card.css";
import Modal from "react-bootstrap/Modal";
import Button from "./Button";

function CardComponent(props) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setTimeout(()=>{setShow(false)}, 10);

  let productText = props.discount ? (
    <Card.Text className="text-orange ps-2">
      {new Intl.NumberFormat().format(
        props.price - (props.price * props.percentage) / 100
      )}
    <strike className="ms-2 text-dark">{new Intl.NumberFormat().format(props.price)}₮</strike>
    </Card.Text>
  ) : (
    <Card.Text className="text-orange ps-2">
      {new Intl.NumberFormat().format(props.price)}₮
    </Card.Text>
  );
  let productImage = props.discount ? (
    <div className="position-relative">
      <Card.Img variant="top" className="img-fluid p-2" src={props.image} />
      <div id="discounted-img">{props.percentage}%</div>
    </div>
  ) : (
    <Card.Img variant="top" className="img-fluid p-2" src={props.image} />
  );

  return (
    <div id="card-component" className="radius" onClick={handleShow} >
      <Card className="mt-5 radius border-0">
        <Card.Body className="position-relative z-index-1">
          {productImage}
          <Card.Title className="ps-2">{props.name}</Card.Title>
          {productText}
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <div className="container my-modal">
          <div className="">
            <img className="" src={props.image} alt="" />
          </div>

          <div className="container">
            <div className="row mb-2">
              <h5 className="foods-name">{props.name}</h5>
              <h5 className="foods-price">{props.price}₮</h5>
            </div>

            <div className="line-1 mb-3"></div>

            <div className="">
              <h5 className="orts">Орц</h5>
              <p className="ingredient">{props.recipe}</p>
            </div>

            <div className="row mb-4">
              <h5 className="size">Хэмжээ</h5>
              <Button
                className="border active w-50"
                value={props.portion}
              ></Button>
            </div>

            <div className="row mb-4">
              <h5 className="number">Тоо</h5>
              <div className="col-3">
                <Button className="default mt-1" value="-"></Button>
              </div>
              <div className="col-6">
                <Button
                  className="noBorder1 w-100"
                  value={props.portion}
                ></Button>
              </div>
              <div className="col-3">
                <Button className="default mt-1" value="+"></Button>
              </div>
            </div>

            <Button className="noBorder border w-100" value="Сагслах">
              Сагслах
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default CardComponent;