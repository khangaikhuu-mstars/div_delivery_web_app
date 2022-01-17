import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../css/TextField.css";

const UserInfo = () => {
  return (
    <div className="App-header1">
      <Form>
        <Form.Label className="reBorder"></Form.Label>
        <Form.Label className="recoverPass">Хэрэглэгчийн мэдээлэл</Form.Label>
        <Form.Group className="mb-2">
          <InputGroup className="mb-2">
            <Form.Control
              className="userSize ps-5"
              type="userName"
              aria-label=" Name"
              placeholder="Хэрэглэгчийн нэр"
            />
            {/* <Form.Control className="formSize ps-5" type="password" controlId="formPassword" placeholder="Утасны дугаар" /> */}
            <InputGroup.Text className="leftIcons userBack">
              <img src="/icons/user.svg" alt="" />
            </InputGroup.Text>
            <InputGroup.Text className="rightIcons"></InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-2 ">
          <InputGroup className="mb-2">
            <Form.Control
              className="userSize ps-5"
              type="phoneNumber"
              placeholder="Утасны дугаар"
            />
            <InputGroup.Text className="leftIcons userBack">
              <img src="/icons/phone.svg" alt="" />
            </InputGroup.Text>
            <InputGroup.Text className="rightIcons"></InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Button className="default" value="ХАДГАЛАХ" />
      </Form>
    </div>
  );
};

export default UserInfo;
