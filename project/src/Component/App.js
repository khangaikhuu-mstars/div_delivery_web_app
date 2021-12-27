import React from "react";
import Buttons from "./Button";
import "../css/App.css";
import { Container } from "react-bootstrap";
import Tab from "./Tab";

function App() {
  return (
    <div>
      <Container>
        <div id="buttons" className="mt-5">
          <Buttons value="default" className="default my-2" />
          <Buttons value="angarag" className="active-button my-2"/>
          <Buttons value="default" className="noBorder my-2" />
          <Buttons className="see-all-mn my-2" />
          <Buttons className="see-all-en my-2" />
        </div>
      </Container>
      <div className="mt-5" id="tabs">
        <Tab />
      </div>
    </div>
  );
}

export default App;
