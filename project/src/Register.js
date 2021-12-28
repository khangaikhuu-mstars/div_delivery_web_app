import React from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup"
import Col from "react-bootstrap/Col"
import "../src/index.css"
import icon from "./icons/search.svg"



const Register = () =>{
    return(
       <Form>
  <Form.Group className="mb-3" controlId="formEmail">
    <Form.Label>И-Мейл</Form.Label>
    <Form.Control  type="email" placeholder="И-Мейл хаягаа оруулна уу."/>
  </Form.Group>

  <Col xs="auto"> 
  <Form.Group className="mb-3 " >
    <Form.Label>Нууц үг</Form.Label>
    <InputGroup className="mb-2">
    <Form.Control  type="password" controlId="formPassword" placeholder="Нууц үгээ оруулна уу."  /> 
    <InputGroup.Text><a href=""><img src={icon} alt="" /></a></InputGroup.Text>     
      </InputGroup>
  </Form.Group>
  </Col>

  <Col xs="auto">    
  <Form.Group className="mb-3 " >
    <Form.Label >Нууц үг давтах </Form.Label>
      <InputGroup className="mb-2">
    <Form.Control  type="password" controlId="formPassword" placeholder="Нууц үгээ давтана уу." /> 
    <InputGroup.Text><a href=""><img src={icon} alt="" /></a></InputGroup.Text>     
      </InputGroup>
  </Form.Group>
    </Col>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Үйлчилгээний нөхцөл зөвшөөрөх" />
  </Form.Group>

</Form> 


    )
}

export default Register
