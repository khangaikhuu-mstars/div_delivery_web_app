import React from "react"
import Form from 'react-bootstrap/Form';
import "../css/TextField.css"

const ConfirmPass = () => {
    return (
        <div className="App-header1">
            <Form>
                <Form.Label className="reBorder" ></Form.Label>
                <Form.Label className="recoverPass" >НУУЦ СЭРГЭЭХ</Form.Label>
                <Form.Group className="mb-3" controlId="formPassword" >
                    <Form.Label className="registerName" >Нууц үг сэргээх код</Form.Label>
                    <Form.Control className="formSize" type="password" controlId="formPassword" placeholder="Нууц үгээ оруулна уу." />
                </Form.Group>
            </Form>
        </div>
    )
}

export default ConfirmPass;