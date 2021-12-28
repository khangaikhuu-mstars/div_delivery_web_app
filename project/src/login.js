import React from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup"
import Col from "react-bootstrap/Col"
import "../src/index.css"
import icon from "./icons/search.svg"



const Login = () =>{
    return(
       <Form>
  <Form.Group className="mb-3" controlId="formEmail">
    <Form.Label>И-Мейл</Form.Label>
    <Form.Control  type="email" placeholder="И-Мейл хаягаа оруулна уу."/>
  </Form.Group>

  <Col xs="auto"> 
  <Form.Group className="mb-3 " >
    <Form.Label>Нууц үг</Form.Label>
    <InputGroup className="mb-3">
    <Form.Control  type="password" controlId="formPassword" placeholder="Нууц үгээ оруулна уу."  /> 
    <InputGroup.Text><a href=""><img src={icon} alt="" /></a></InputGroup.Text>     
      </InputGroup>
      <Form.Text className="text-mute">
      Нууц үгээ мартсан уу?
    </Form.Text>
  </Form.Group>
  </Col>
</Form> 


    )
}

export default Login