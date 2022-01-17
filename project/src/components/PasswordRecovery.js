import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../css/TextField.css";
import Button from "./Button";
import {NavLink} from "react-router-dom"

const PasswordRecovery = () => {
  const [mail, setMail] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  function handleChange(event) {
    setUserEmail(event.target.value);
  }
  function handleMail() {
    setMail(true);
  }
  let showCode = mail ? (
    <Form>
      <Form.Label className="reBorder"></Form.Label>
      <Form.Label className="recoverPass">НУУЦ ҮГ СЭРГЭЭХ</Form.Label>
      <div id="codeSent" className="my-2">
        Таны <span className="text-orange d-block">"{userEmail}"</span> хаяг руу нууц үг
        сэргээх код илгээлээ.
      </div>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label className="mt-3">Нууц үг сэргээх код</Form.Label>
        <Form.Control className="formSize" type="text" placeholder="********" />
      </Form.Group>
      <NavLink to="/new-password">
        <Button value="Үргэлжлүүлэх" className="default mt-4" />
      </NavLink>
     
    </Form>
  ) : (
    <Form>
      <Form.Label className="reBorder"></Form.Label>
      <Form.Label className="recoverPass">НУУЦ ҮГ СЭРГЭЭХ</Form.Label>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label className="mt-3">И-Мейл</Form.Label>
        <Form.Control
          className="formSize"
          type="email"
          onChange={handleChange}
          placeholder="И-Мейл хаягаа оруулна уу."
        />
      </Form.Group>
      <div onClick={handleMail}>
        <Button value="Үргэлжлүүлэх" className="default mt-4" />
      </div>
    </Form>
  );


  return <div className="App-header1">{showCode}</div>;
};

export default PasswordRecovery;
