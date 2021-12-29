import React from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup"
import "./compStyle/TextField.css"
import icon from "./icons/search.svg"



const Register = () =>{
    return(
       <Form>
  <Form.Group className="mb-2" controlId="formEmail">
    <Form.Label className="registerName">И-Мейл</Form.Label>
    <Form.Control className="formSize"  type="email" placeholder="И-Мейл хаягаа оруулна уу."/>
  </Form.Group>

  <Form.Group className="mb-2 " >
    <Form.Label className="registerName">Нууц үг</Form.Label>
    <InputGroup className="mb-2">
    <Form.Control className="formSize"  type="password" controlId="formPassword" placeholder="Нууц үгээ оруулна уу."  /> 
    <InputGroup.Text className="rightIcon"><a href=""><img src={icon} alt="" /></a></InputGroup.Text>     
      </InputGroup>
  </Form.Group>


   
  <Form.Group className="mb-2 " >
    <Form.Label className="registerName">Нууц үг давтах </Form.Label>
      <InputGroup className="mb-2">
    <Form.Control className="formSize"  type="password" controlId="formPassword" placeholder="Нууц үгээ давтана уу." /> 
    <InputGroup.Text className="rightIcon"><a href=""><img src={icon} alt="" /></a></InputGroup.Text>     
      </InputGroup>
  </Form.Group>
 

  <Form.Group className="mb-2" controlId="formBasicCheckbox">
    <Form.Check className="checkboxSize" type="checkbox" label="Үйлчилгээний нөхцөл зөвшөөрөх" />
  </Form.Group>

</Form> 


    )
}

export default Register
