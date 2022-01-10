import React from "react";
import Button from "react-bootstrap/Button";

function Buttons(props) {
  return (
    <div className="text-center">
      <Button type={props.type} className={props.className}>{props.value}</Button>
    </div>
  );
}

export default Buttons;
