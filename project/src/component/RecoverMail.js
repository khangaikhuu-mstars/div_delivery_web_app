import React from "react"
import Form from 'react-bootstrap/Form';
import "../css/TextField.css"

const RecoverMail = () => {
    return (
        <Form>
            <Form.Label className="reBorder" ></Form.Label>
            <Form.Label className="recoverPass" >НУУЦ СЭРГЭЭХ</Form.Label>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="registerName">И-Мейл</Form.Label>
                <Form.Control className="formSize" type="email" placeholder="И-Мейл хаягаа оруулна уу." />
            </Form.Group>
        </Form>
    )
}

export default RecoverMail;