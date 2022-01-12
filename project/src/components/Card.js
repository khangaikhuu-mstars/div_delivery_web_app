import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "../css/card.css";
import Modal from "react-bootstrap/Modal";
import Button from "./Button";

function CardComponent(props) {
  const [show, setShow] = useState(false);
  let person = "хүн";

  const portion = () => {
    if (props.portion > 1) {
      return (
        <div className="row">
          <div className="col-6">
            <Button
              value={props.portion / 2 + " хүн"}
              className="active-button "
            />
          </div>
          <div className="col-6">
            <Button value={props.portion + " хүн"} className="active-button" />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Button value={props.portion + " хүн"} className="active-button" />
        </div>
      );
    }
  };
  const handleShow = () => setShow(true);
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
      <Modal size="xl" show={show} onHide={handleClose} centered>
        <Modal.Header
          className="justify-content-end pb-0 pe-4 pe-lg-2"
          closeButton
        ></Modal.Header>
        <div
          id="my-modal"
          className="container row align-items-center pb-4 pe-0 pe-lg-5 my-modal"
        >
          <div className="col-12 col-lg-6 mt-4 mt-lg-0">
            <img
              className="img-fluid"
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
              <div>{portion()}</div>
            </div>

            <div className="my-3" id="counter">
              <h5 className="fw-600">Тоо</h5>
              <div className="row justify-content-between align-items-center">
                <div className="col-2">
                  <Button className="default mt-1" value="-"></Button>
                </div>
                <div className="col-7 text-center" id="counter-number">
                  1
                </div>
                <div className="col-2">
                  <Button className="default mt-1" value="+"></Button>
                </div>
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
