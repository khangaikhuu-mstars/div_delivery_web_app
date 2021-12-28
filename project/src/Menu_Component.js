import './css/menu.css';
import './css/App.css';
import {Container, Nav, Navbar} from 'react-bootstrap';

function Menu_Component() {
return (
  <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Toggle aria-controls="Navbar" />
    <div className="logo">
      <img src="food1.png" alt="" />
      <div className="food">Food Delivery</div>
    </div>
    <div className="searchAndBusket">
      <div className="search"><a href="#"><img src="search.png" alt="" /></a></div>
      <div className="busket"><a href="#"><img src="busket.png" alt="" /></a></div>
    </div>
    
  </Container>
</Navbar>
);
}

export default Menu_Component;