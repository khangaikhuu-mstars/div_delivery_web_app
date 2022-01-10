import React from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup"
import "../css/TextField.css"
import Button from "./Button"

const Register = () => {
  return (
    <div className="App-header1">
      <Form >
        <Form.Label className="reBorder" ></Form.Label>
        <Form.Label className="recoverPass" >Бүртгүүлэх</Form.Label>
        <Form.Group className="my-3" controlId="formEmail">
          <Form.Label className="registerName">И-Мейл</Form.Label>
          <Form.Control
            className="formSize"
            type="email"
            placeholder="И-Мейл хаягаа оруулна уу."
          />
        </Form.Group>
        <Form.Group className="my-3"  >
          <Form.Label className="registerName">Нууц үг</Form.Label>
          <InputGroup className="mb-2">
            <Form.Control
              className="formSize"
              type="password"
              controlId="formPassword"
              placeholder="Нууц үгээ оруулна уу."
            />
            <InputGroup.Text className="rightIcon">
              <a href=""></a>
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group className="my-3" >
          <Form.Label className="registerName">Нууц үг давтах </Form.Label>
          <InputGroup className="mb-2">
            <Form.Control
              className="formSize"
              type="password"
              controlId="formPassword"
              placeholder="Нууц үгээ давтана уу."
            />
            <InputGroup.Text className="rightIcon">
              <a href="#"></a>
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group className="my-3" controlId="formBasicCheckbox">
          <Form.Check className="checkboxSize" type="checkbox" label="Үйлчилгээний нөхцөл зөвшөөрөх" />
        </Form.Group>
        <Button className="default" value="БҮРТГҮҮЛЭХ"/>
      </Form>
    </div>
  );
};

export default Register;
