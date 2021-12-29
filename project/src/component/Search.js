import React from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup"
import "./compStyle/TextField.css"
import icon from "./icons/searchButton.svg"

const Search = () => {
  return (
    <Form>
      <Form.Group className="mb-2" controlId="formEmail">
        <InputGroup className="mb-1">
          <Form.Control className="formSize ps-4" type="email" placeholder="Хайх" />
          <InputGroup.Text className="leftIcon"><a href=""><img src={icon} alt="" /></a></InputGroup.Text>
        </InputGroup>
      </Form.Group>
    </Form>
  )
}

export default Search;