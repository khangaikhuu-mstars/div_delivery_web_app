import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../css/TextField.css";

const Search = () => {
  return (
    <div className="App-header1">
      <Form>
        <Form.Label className="reBorder"></Form.Label>
        <Form.Label className="recoverPass">Хайлт</Form.Label>
        <Form.Group className="mb-2" controlId="formEmail">
          <InputGroup className="mb-1">
            <Form.Control
              className="formSize searchSize"
              type="email"
              placeholder="Хайх"
            />
            <InputGroup.Text className="leftIconSearch">
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Search;
