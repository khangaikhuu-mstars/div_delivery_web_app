import React, { useState } from "react"
import { Offcanvas, Button } from 'react-bootstrap';
import busket from '../img/busket.png';


function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-none" className="sags text-orange fw-500" onClick={handleShow} > <img className='busketSize' src={busket} width={17} height={20} />
                <div className="text"> Сагс </div> 
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="end" >
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

export default Example