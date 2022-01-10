import React from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup"
import "../css/TextField.css"
import Button from "./Button"

const NewPass = () => {
    return (
        <div className="App-header1">
            <Form>
                <Form.Label className="reBorder" ></Form.Label>
                <Form.Label className="newPass" >НУУЦ ҮГ ЗОХИОХ</Form.Label>
                <Form.Group className="mb-3" controlId="formPassword" >
                    <Form.Label className="registerName" >Нууц үг</Form.Label>
                    <InputGroup className="mb-2">
                        <Form.Control className="formSize" type="password" controlId="formPassword" placeholder="Нууц үгээ оруулна уу." />
                        <InputGroup.Text className="rightIcon"><a href="#"></a></InputGroup.Text>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword" >
                    <Form.Label className="registerName" >Нууц үг зохиох</Form.Label>
                    <InputGroup className="mb-2">
                        <Form.Control className="formSize" type="password" controlId="formPassword" placeholder="Нууц үгээ оруулна уу." />
                        <InputGroup.Text className="rightIcon"><a href="#"></a></InputGroup.Text>
                    </InputGroup>
                </Form.Group>
            <Button className="default" value="ХАДГАЛАХ"/> 
            </Form>
        </div>
    )
}

export default NewPass;
