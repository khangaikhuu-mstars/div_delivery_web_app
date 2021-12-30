import React from "react"
import Form from 'react-bootstrap/Form';
import "../css/TextField.css"

const NewPass = () => {
    return (
        <Form>
            <Form.Label className="reBorder" ></Form.Label>
            <Form.Label className="newPass" >НУУЦ ҮГ ЗОХИОХ</Form.Label>
            <Form.Group className="mb-3" controlId="formPassword" >
                <Form.Label className="registerName" >Нууц үг</Form.Label>
                <Form.Control className="formSize" type="password" controlId="formPassword" placeholder="Нууц үгээ оруулна уу." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword" >
                <Form.Label className="registerName" >Нууц үг зохиох</Form.Label>
                <Form.Control className="formSize" type="password" controlId="formPassword" placeholder="Нууц үгээ оруулна уу." />
            </Form.Group>
        </Form>
    )
}

export default NewPass;