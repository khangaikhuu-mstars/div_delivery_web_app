import React from "react";
import Form from "react-bootstrap/Form";
import "../css/TextField.css";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import InputGroup from "react-bootstrap/esm/InputGroup";
import FormControl from "react-bootstrap/esm/FormControl";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";

const Dropdown = () => {
  return (
    <Form className="App-header1">
      <fieldset enabled>
        <Form.Label className="reBorder"></Form.Label>
        <Form.Label className="recoverPass">Хаягын мэдээлэл оруулах</Form.Label>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="enabledSelect" className="textColor">
            Хаягын мэдээлэл
          </Form.Label>
          <InputGroup className="mb-1">
            <InputGroup.Text className="leftIcon"></InputGroup.Text>
          </InputGroup>
          <Form.Select className="formSize" id="enabledSelect">
            <option value={0} className="backColor">
              Дүүрэг сонгоно уу.
            </option>
            <option value={1} className="backColor1">
              Баянзүрх дүүрэг
            </option>
            <option value={2} className="backColor1">
              Хан-Уул дүүрэг
            </option>
            <option value={3} className="backColor1">
              Сонгино-Хайрхан дүүрэг
            </option>
            <option value={4} className="backColor1">
              Чингэлтэй дүүрэг
            </option>
            <option value={5} className="backColor1">
              Сүхбаатар дүүрэг
            </option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <InputGroup className="mb-1">
            <InputGroup.Text className="leftIcon"></InputGroup.Text>
          </InputGroup>
          <Form.Select className="formSize" id="enabledSelect">
            <option value={0}>Xороо сонгоно уу.</option>
            <option value={1}>1-р хороо</option>
            <option value={2}>2-р хороо</option>
            <option value={3}>3-р хороо</option>
            <option value={4}>4-р хороо</option>
            <option value={5}>5-р хороо</option>
            <option value={6}>6-р хороо</option>
            <option value={7}>7-р хороо</option>
            <option value={8}>8-р хороо</option>
            <option value={9}>9-р хороо</option>
            <option value={10}>10-р хороо</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <InputGroup className="mb-1">
            <InputGroup.Text className="leftIcon"></InputGroup.Text>
          </InputGroup>
          <Form.Select className="formSize" id="enabledSelect">
            <option value={0}>Байр, Гудамж сонгоно уу.</option>
            <option value={1}>34-р Байр</option>
            <option value={2}>Нархан хотхон</option>
            <option value={3}>89-р Байр</option>
            <option value={4}>4-р Байр</option>
            <option value={5}>45-р Байр</option>
            <option value={6}>45-р Байр</option>
          </Form.Select>
        </Form.Group>
        <Form.Label htmlFor="enabledSelect" className="textColor">
          Хаягын дэлгэрэнгүй
        </Form.Label>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            className="formSize"
            as="textarea"
            placeholder="Орц, давхар, орцны код"
            style={{ height: "130px" }}
          />
        </Form.Group>
        <Form.Label htmlFor="enabledSelect" className="textColor">
          Утасны дугаар
        </Form.Label>
        <FloatingLabel controlId="floatText" placeholder="Утасны дугаар">
          <InputGroup className="mb-3">
            <FormControl className="formSize" placeholder="Утасны дугаар" />
          </InputGroup>
        </FloatingLabel>
        <Form.Label htmlFor="enabledSelect" className="textColor">
          Төлбөр төлөх
        </Form.Label>
        <Form.Group className="mb-2" controlId="formBasicCheckbox">
          <Row>
            <Col>
              <Form.Check type="checkbox" label="Бэлнээр" />
            </Col>
            <Col>
              <Form.Check type="checkbox" label="Картаар" />
            </Col>
          </Row>
        </Form.Group>
      </fieldset>
    </Form>
  );
};

export default Dropdown;
