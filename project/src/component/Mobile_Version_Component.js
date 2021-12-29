import '../css/menu.css';
import '../css/App.css';
import search from '../img/search.png';
import busket from '../img/busket.png';
import human from '../img/human.png';
import food1 from '../img/food1.png';


import {Container, Nav, Navbar, Offcanvas, Form, FormControl, Button} from 'react-bootstrap';

function Mobile_Version_Component() {
return (

<Navbar bg="light" expand="lg">
    <Container>
        <div className="navb">
            <Button onClick={this.onToggle} type="button">
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
            </Button>
            <div className="searchAndBusket order-1 d-lg-none">
                <div className="search"><a href="#"><img src={search} alt="" /></a></div>
                <div className="busket"><a href="#"><img src={busket} alt="" /></a></div>
            </div>
            <Navbar.Brand href="#">
                <div className="logo order-0">
                    <img src={food1} alt="" />
                    <div className="food">Food Delivery</div>
                </div>
            </Navbar.Brand>
        </div>
            <Navbar.Collapse>
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link className="tses" href="#action1" active>НҮҮР</Nav.Link>
                    <Nav.Link className="tses" href="#action2">ХООЛНЫ ЦЭС</Nav.Link>
                    <Nav.Link className="tses" href="#action2">ХҮРГЭЛТИЙН БҮС</Nav.Link>
                </Nav>

            </Navbar.Collapse>
    </Container>
</Navbar>


);
}

export default Mobile_Version_Component;