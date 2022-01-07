import React, { useState } from "react"
import { Offcanvas, Button } from 'react-bootstrap';

function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow((s) => !s);

  return (
    <>
      <Button
        aria-controls="offcanvasRight"
        variant="outline-none"
        className="sags text-orange fw-500"
        onClick={handleShow}
      >
        {" "}
        <img
          className="busketSize"
          src="/icons/busket.svg"
          width={25}
          height={30}
        />
        <div className="text">Сагс</div>
      </Button>
      <Offcanvas
        id="offcanvasRight"
        show={show}
        onHide={handleClose}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Taны Сагс</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;
