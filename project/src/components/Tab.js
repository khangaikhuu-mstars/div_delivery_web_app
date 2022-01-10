import React from "react";
import { Nav, Container } from "react-bootstrap";

function Tab() {
  return (
    <Container>
      <Nav
        justify
        id="menu-tab"
        variant="pills"
        className="text-center mt-4"
        defaultActiveKey="/home"
      >
        <Nav.Item className="me-2">
          <Nav.Link href="/home">Үндсэн хоол</Nav.Link>
        </Nav.Item>
        <Nav.Item className="mx-2">
          <Nav.Link eventKey="/link-1">Салад ба зууш</Nav.Link>
        </Nav.Item>
        <Nav.Item className="mx-2">
          <Nav.Link eventKey="link-2">Амттан</Nav.Link>
        </Nav.Item>
        <Nav.Item className="ms-2">
          <Nav.Link eventKey="link-3">Хямдралтай</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}

export default Tab;
