import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "./Button";
// import { useModal } from "../context/ModalContext";

function ModalCard(props) {
  // const {modalShow, setModalShow } = useModal();

  // const hideModal =()=>{
  //   setTimeout(() => {
  //   setModalShow(false)
  //   console.log(modalShow)
  // }, 200)};

  const [ show, setShow ] = useState(true)
  const handleClose = () => {
    setShow(false);
    props.showHandler(false)
  }
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
      >
        <div className="container my-modal">
          <div className="" closeButton>
            <img className="img-fluid" src={props.data.image} alt="" />
          </div>

          <div className="container">
            <div className="row mb-2">
              <h5 className="foods-name">{props.data.name}</h5>
              <h5 className="foods-price">{props.data.price}₮</h5>
            </div>

            <div className="line-1 mb-3"></div>

            <div className="">
              <h5 className="orts">Орц</h5>
              <p className="ingredient">{props.data.recipe}</p>
            </div>

            <div className="row mb-4">
              <h5 className="size">Хэмжээ</h5>
              <Button
                className="border active w-50"
                value={props.data.portion}
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
                  value={props.data.portion}
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
    </>
  );
}
export default ModalCard;
