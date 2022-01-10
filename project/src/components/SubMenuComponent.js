import Main from "./SubMenu/Main";
import Salad from "./SubMenu/Salad";
import Dessert from "./SubMenu/Dessert";
import Sales from "./SubMenu/Sales";
import { Route, Redirect } from "react-router-dom";
import React from "react";
import { Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SubMenuComponent = ({ match }) => {
  return (
    <div>
      <Container>
        <Nav
          justify
          id="menu-tab"
          variant="pills"
          className="text-center mt-4"
          defaultActiveKey="/main"
        >
          <Nav.Item className="me-2">
            <NavLink className="nav-link" to={`${match.url}/main`}>
              {" "}
              Үндсэн хоол{" "}
            </NavLink>{" "}
          </Nav.Item>{" "}
          <Nav.Item className=" mx-2">
            <NavLink className="nav-link" to={`${match.url}/salad`}>
              {" "}
              Салад ба зууш{" "}
            </NavLink>{" "}
          </Nav.Item>
          <Nav.Item className=" mx-2">
            <NavLink className="nav-link" to={`${match.url}/dessert`}>
              {" "}
              Амттан{" "}
            </NavLink>{" "}
          </Nav.Item>
          <Nav.Item className="ms-2">
            <NavLink className="nav-link" to={`${match.url}/sales`}>
              {" "}
              Хямдралтай{" "}
            </NavLink>{" "}
          </Nav.Item>
        </Nav>{" "}
        <Route
          exact
          path={match.path}
          render={() => <Redirect to={`${match.path}/main`} />}
        />
        <Route path={`${match.path}/main`} component={Main} />
        <Route path={`${match.path}/salad`} component={Salad} />
        <Route path={`${match.path}/dessert`} component={Dessert} />
        <Route path={`${match.path}/sales`} component={Sales} />
      </Container>
    </div>
  );
};
export default SubMenuComponent;
