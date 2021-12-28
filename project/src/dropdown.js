import React from "react"
import Form from 'react-bootstrap/Form';
import  Button from "react-bootstrap/Button";
import "../src/index.css"
import fetch from "./fetch"
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import InputGroup from "react-bootstrap/esm/InputGroup";
import icon from "./icons/location.svg"




const Dropdown = () =>{
    return(
        <Form>
        <fieldset enabled style={{marginLeft: "20px"}}>
         
          <Form.Group className="mb-3">
            {/* <InputGroup className="mb-2">
    <Form.Control  type="password" controlId="formPassword" placeholder="Нууц үгээ оруулна уу."  /> 
    <InputGroup.Text><a href=""><img src={icon} alt="" /></a></InputGroup.Text>     
      </InputGroup> */}
            <Form.Label htmlFor="enabledSelect">Хаягын мэдээлэл</Form.Label>
            <Form.Select id="enabledSelect">
              <option>Дүүрэг сонгоно уу.</option>
              <option>Баянзүрх дүүрэг</option>
              <option>Хан-Уул дүүрэг</option>
              <option>Сонгино-Хайрхан дүүрэг</option>
              <option>Чингэлтэй дүүрэг</option>
              <option>Сүхбаатар дүүрэг</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Select id="enabledSelect">
              <option>Xороо сонгоно уу.</option>
              <option>1-р хороо</option>
              <option>2-р хороо</option>
              <option>3-р хороо</option>
              <option>4-р хороо</option>
              <option>5-р хороо</option>
              <option>6-р хороо</option>
              <option>7-р хороо</option>
              <option>8-р хороо</option>
              <option>9-р хороо</option>
              <option>10-р хороо</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Select id="enabledSelect">
              <option>Байр, Гудамж сонгоно уу.</option>
              <option>34-р Байр</option>
              <option>Нархан хотхон</option>
              <option>89-р Байр</option>
              <option>4-р Байр</option>
              <option>45-р Байр</option>
              <option>45-р Байр</option>
            </Form.Select>
          </Form.Group>

 <Form.Label htmlFor="enabledSelect">Хаягын дэлгэрэнгүй</Form.Label>

  <FloatingLabel controlId="floatingTextarea2" label="Comments">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '130px' }}
    />
  </FloatingLabel>

  <Form.Label htmlFor="enabledSelect">Утасны дугаар</Form.Label>
  <FloatingLabel controlId="floatingTextarea2" label="Утасны дугаар">
  <Form.Control
      as="textarea"
      placeholder="Leave a phone number here"
    //   style={{" }}
    />
  </FloatingLabel>

          <Form.Group className="mb-3">
            {/* <Form.Check
              type="checkbox"
              id="enabledFieldsetCheck"
              label="Can't check this"
            /> */}
          </Form.Group>
          <Button type="submit">Submit</Button>
        </fieldset>
      </Form>


    )
}

export default Dropdown