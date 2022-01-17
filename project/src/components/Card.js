import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "../css/card.css";
import Modal from "react-bootstrap/Modal";
import Button from "./Button";

function CardComponent(props) {
  const [fullscreen, setFullscreen] = useState(true);
  function handleShow() {
    setFullscreen("sm-down");
    setShow(true);
  }
  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState(1);
  const portion = () => {
    if (props.portion > 1) {
      return (
        <div className="row">
          <div className="col-6">
            <input type="radio" name="portion" id="portion1" />
            <label htmlFor="portion1">{props.portion / 2 + " хүн"}</label>
          </div>
          <div className="col-6">
            <input type="radio" name="portion" id="portion2" />
            <label htmlFor="portion2">{props.portion + " хүн"}</label>
          </div>
        </div>
      );
    } else {
      return (
        <div className="col-6  col-lg-4 mx-auto">
          <input defaultChecked type="radio" name="portion" id="portion3" />
          <label htmlFor="portion3">{props.portion + " хүн"}</label>
        </div>
      );
    }
  };
  const decrementScore = () => {
    if (counter > 1) {
      setCounter((prevCount) => prevCount - 1);
    }
  };
  const incrementScore = () => setCounter((prevCount) => prevCount + 1);
  const handleClose = () =>
    setTimeout(() => {
      setShow(false);
    }, 10);
  let modalPrice = props.discount ? (
    <Card.Text className="text-orange ps-2">
      {new Intl.NumberFormat().format(
        props.price - (props.price * props.percentage) / 100
      )}
      <strike className="ms-2 text-dark">
        {new Intl.NumberFormat().format(props.price)}₮
      </strike>
    </Card.Text>
  ) : (
    <Card.Text className="text-orange ps-2">
      {new Intl.NumberFormat().format(props.price)}₮
    </Card.Text>
  );

  let productText = props.discount ? (
    <Card.Text className="text-orange ps-2">
      {new Intl.NumberFormat().format(
        props.price - (props.price * props.percentage) / 100
      )}
      <strike className="ms-2 text-dark">
        {new Intl.NumberFormat().format(props.price)}₮
      </strike>
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
    <div id="card-component" className="radius" onClick={handleShow}>
      <Card className="mt-5 radius border-0">
        <Card.Body className="position-relative z-index-1">
          {productImage}
          <Card.Title className="ps-2">{props.name}</Card.Title>
          {productText}
        </Card.Body>
      </Card>
      <Modal
        id="modal"
        size="xl"
        show={show}
        fullscreen={fullscreen}
        onHide={handleClose}
        centered
      >
        <Modal.Header
          className="justify-content-end pb-0 pe-4 pe-lg-2"
          closeButton
        ></Modal.Header>
        <div
          id="my-modal"
          className="container row align-items-center pb-5 pe-0 pe-lg-5 my-modal"
        >
          <div className="img-fluid" className="col-12 col-lg-6 mt-4 mt-lg-0 text-center">
            <img
              id="modal-img"
              width={475}
              height={443}
              src={props.image}
            />
          </div>

          <div className="col-12 col-lg-6 mt-4 mt-lg-0">
            <div
              className="d-flex justify-content-between align-items-start"
              id="modal-title"
            >
              <h5 className="fw-600 mb-3">{props.name}</h5>
              <h5>{modalPrice}</h5>
            </div>
            <div className="mt-3">
              <h5 className="fw-600">Орц</h5>
              <p className="ingredient">{props.recipe}</p>
            </div>

            <div className="my-3">
              <h5 className="fw-600">Хэмжээ</h5>
              {portion()}
            </div>

            <div className="my-3" id="counter">
              <h5 className="fw-600">Тоо</h5>
              <div className="row justify-content-between align-items-center">
                <div onClick={decrementScore} className="col-2">
                  <Button className="default mt-1" value="-"></Button>
                </div>
                <div className="col-7 text-center" id="counter-number">
                  {counter}
                </div>
                <div onClick={incrementScore} className="col-2">
                  <Button className="default mt-1" value="+"></Button>
                </div>
              </div>
            </div>
            <Button className="noBorder w-100" value="Сагслах">
              Сагслах
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default CardComponent;
