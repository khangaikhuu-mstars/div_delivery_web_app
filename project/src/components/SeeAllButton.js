import React from "react";
import { NavLink } from "react-router-dom";

function SeeAllButton(props) {
  return (
    <div className="text-center my-3">
      <NavLink to={props.value} id="see-all-button" className="active text-white bg-orange radius">Бүгдийг харах <span className="ps-2"><svg aria-hidden="true" focusable="false" width={10} height={20} data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="white" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></span> </NavLink>
    </div>
  );
}

export default SeeAllButton;
