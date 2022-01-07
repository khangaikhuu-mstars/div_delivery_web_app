import {
Container,
Nav,
Navbar,
Button,
} from "react-bootstrap";
import "../css/menu.css";
import "../css/App.css";
import OffCanvas from "./Canvas";
import SearchBar from "./SearchBar";
import { NavLink, useHistory} from "react-router-dom";
import React, { useState } from "react";
import MenuInfo from "./NavbarMenuInfo";

function MenuComponent() {
return (
<Navbar expand="lg">
<Container>
   <MenuInfo/>
    <div className="searchAndBusket order-1 d-lg-none">
     <SearchBar/>
     <OffCanvas/>
    </div>
    <Navbar.Brand href="/">
      <div className="logo order-0">
        <img src="/icons/food.svg" alt="" width={30} height={35} />
        <div className="food">Food Delivery</div>
      </div>
    </Navbar.Brand>
    <Navbar id="navbarScroll">
      <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
        <div className="tses">
          <NavLink className="ts nav-link" exact to="/">
            НҮҮР
          </NavLink>
          <NavLink className="ts nav-link" to="/FoodMenu">
            ХООЛНЫ ЦЭС
          </NavLink>
          <NavLink className="ts nav-link" to="/Area">
            ХҮРГЭЛТИЙН БҮС
          </NavLink>
        </div>
        <div id="p">
        </div>
      </Nav>
        <div className="loginBusket">
          <SearchBar/>
          <OffCanvas/>
          <div className="login">
           <a href="">
              <img src="/icons/usermenu.svg" alt="" width={20} height={25} />
           </a>
            <Button variant="outline-none" className="signin text-orange fw-500">
              Нэвтрэх
            </Button>
          </div>
        </div>
    </Navbar>
  </Container>
</Navbar>
);
}

export default MenuComponent;