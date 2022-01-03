import React from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup"
import Col from "react-bootstrap/Col"
import "../css/TextField.css"

const Login = () => {
  return (
    <div className="App-header1">
      <Form >
        <Form.Label className="reBorder" ></Form.Label>
        <Form.Label className="recoverPass" >НЭВТРЭХ</Form.Label>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label className="registerName">И-Мейл</Form.Label>
          <Form.Control className="formSize" type="email" placeholder="И-Мейл хаягаа оруулна уу." />
        </Form.Group>
        <Col xs="auto">
          <Form.Group className="mb-3 " >
            <Form.Label className="registerName">Нууц үг</Form.Label>
            <InputGroup className="mb-2">
              <Form.Control className="formSize" type="password" controlId="formPassword" placeholder="Нууц үгээ оруулна уу." />
              <InputGroup.Text className="rightIcon"><a href="#"></a></InputGroup.Text>
            </InputGroup>
            <Form.Text >
              <a href="#" className="text-mute">Нууц үгээ мартсан уу.</a>
            </Form.Text>
          </Form.Group>
        </Col>
      </Form>
    </div>
  )
}

export default Login;