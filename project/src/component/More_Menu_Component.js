import './css/menu.css';
import './css/App.css';
import {Container, Nav, Navbar, NavDropdown, Offcanvas, Form, FormControl, Button} from 'react-bootstrap';

function More_Menu_Component() {
return (
<Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <div className="searchAndBusket order-1 d-lg-none">
            <div className="search"><a href="#"><img src="search.png" alt="" /></a></div>
            <div className="busket"><a href="#"><img src="busket.png" alt="" /></a></div>
        </div>
        <Navbar.Brand href="#">
            <div className="logo order-0">
                <img src="food1.png" alt="" />
                <div className="food">Food Delivery</div>
            </div>
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <Nav.Link className="tses" href="#action1" active>НҮҮР</Nav.Link>
                <Nav.Link className="tses" href="#action2">ХООЛНЫ ЦЭС</Nav.Link>
                <Nav.Link className="tses" href="#action2">ХҮРГЭЛТИЙН БҮС</Nav.Link>
            </Nav>
            <Form className="d-flex">
                <FormControl type="search" placeholder="&#128269; Хайх" id="search" className="me-2"
                    aria-label="Search" />
                <div className="loginBusket">
                    <div className="d-none d-md-block">
                        <Button variant="outline-none">
                             <img src="search.png" alt="" />
                        </Button>
                    </div>
                    <div className="busket">
                        <img src="busket.png" alt="" />
                        <Button variant="outline-none">Сагс</Button>
                    </div>
                    <div className="login">
                        <img src="human.png" alt="" />
                        <Button variant="outline-none">Нэвтрэх</Button>
                    </div>
                </div>
            </Form>

        </Navbar.Collapse>
    </Container>
</Navbar>
);
}

export default More_Menu_Component;