import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import search from "../img/search.png";
import busket from "../img/busket.png";
import human from "../img/human.png";
import food1 from "../img/food1.png";
import see from "../img/see.png";
import "../css/menu.css";
import "../css/App.css";
import { NavLink, Link, useHistory } from "react-router-dom";
import Example from "./Canvas";

function MenuComponent() {
  let foodInput = "";
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    let foodName = foodInput.value;
    let path = `/search?q=${foodName}`;
    history.push(path);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="offcanvasNavbar"/>
        <div className="searchAndBusket order-1 d-lg-none">
          <div className="search"><Link to="#"><img src={search} alt="" /></Link></div>
         <Example />
          <div className="search">
            <Link to="#">
              <img src={search} alt="" />
            </Link>
          </div>
          <div className="busket">
            <Link to="#">
              <img src={busket} alt="" />
            </Link>
          </div>
        </div>
        <Navbar.Brand href="/">
          <div className="logo order-0">
            <img src={food1} alt="" />
            <div className="food">Food Delivery</div>
          </div>
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
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
            <div className="info">
              <div className="menu-info">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="35"
                    height="35"
                    rx="10"
                    fill="#F2994A"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M21.1562 24.8086C21.0859 25.6172 21.7539 26.25 22.5625 26.25H24.5312C25.3047 26.25 25.9375 25.6523 25.9375 24.9141V9.62109C25.9375 8.88281 25.3047 8.25 24.5312 8.25C22.2812 8.25 19.1875 11.1328 19.1523 14.4375C19.1523 16.3008 20.1719 17.8477 21.6484 19.0078L21.1562 24.8086ZM20.3125 14.4375C20.3125 11.6953 22.9492 9.375 24.5312 9.375C24.6719 9.375 24.8125 9.48047 24.8125 9.62109V24.9141C24.8125 25.0195 24.6719 25.125 24.5312 25.125H22.5625C22.3867 25.125 22.2461 25.0195 22.2812 24.9141L22.8086 18.4805C21.4375 17.4609 20.3125 16.2305 20.3125 14.4375ZM17.5 9.44531C17.3945 8.77734 16.7617 8.25 15.8828 8.25C15.4609 8.25 15.0391 8.39062 14.7227 8.67188C14.4062 8.42578 14.0195 8.25 13.5625 8.25C13.0703 8.25 12.6836 8.42578 12.3672 8.67188C12.0508 8.39062 11.6289 8.25 11.207 8.25C10.3281 8.25 9.69531 8.77734 9.58984 9.44531C9.51953 9.79688 9.0625 12.4336 9.0625 13.5234C9.0625 15.3164 9.97656 16.7578 11.5586 17.4258L11.1367 24.8438C11.1016 25.6172 11.6992 26.25 12.5078 26.25H14.6172C15.3906 26.25 15.9883 25.6172 15.9531 24.8438L15.5664 17.4258C17.1133 16.7578 18.0625 15.3164 18.0625 13.5234C18.0625 12.4336 17.5703 9.79688 17.5 9.44531ZM14.4062 16.6875L14.8281 24.9141C14.8281 25.0195 14.7227 25.125 14.6172 25.125H12.5078C12.3672 25.125 12.2617 25.0195 12.2617 24.9141L12.6836 16.6875C11.207 16.4062 10.1875 15.1758 10.1875 13.5234C10.1875 12.5039 10.6797 9.65625 10.6797 9.65625C10.75 9.30469 11.6992 9.30469 11.7344 9.65625V13.9453C11.7695 14.3672 12.7188 14.3672 12.7539 13.9805L13.0352 9.65625C13.0703 9.30469 14.0195 9.30469 14.0547 9.65625L14.3359 13.9805C14.3711 14.3672 15.3203 14.3672 15.3555 13.9453V9.65625C15.3906 9.30469 16.3398 9.30469 16.4102 9.65625C16.4102 9.65625 16.9023 12.5039 16.9023 13.5234C16.9375 15.1758 15.8828 16.4062 14.4062 16.6875Z"
                    fill="#F17228"
                  />
                </svg>
                <Nav.Link className="tses-toggle" href="#">
                  Хоолны цэс
                </Nav.Link>
                <a href="">
                  <img src={see} alt="" />
                </a>
              </div>
              <div className="line"></div>
              <div className="menu-info">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="35"
                    height="35"
                    rx="10"
                    fill="#F2994A"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M27.0625 13.875C26.9922 13.875 26.9219 13.9102 26.8516 13.9453L20.875 16.125L20.4883 16.0195C21.332 14.7891 22 13.5234 22 12.5742C22 10.1836 19.9609 8.25 17.5 8.25C15.0039 8.25 13 10.2188 13 12.5742C13 12.9961 13.1406 13.4883 13.3516 14.0156L8.07812 15.8438C7.65625 16.0195 7.375 16.4414 7.375 16.8984V25.6875C7.375 26.0391 7.62109 26.25 7.9375 26.25C8.00781 26.25 8.07812 26.25 8.14844 26.2148L14.125 24L20.1719 26.1445C20.6289 26.2852 21.1211 26.3203 21.5781 26.1445L26.8867 24.2812C27.3438 24.1406 27.625 23.7188 27.625 23.2617V14.4375C27.625 14.1211 27.3438 13.875 27.0625 13.875ZM13.5625 23.0156L8.46484 24.8789L8.42969 16.9336L13.5625 15.1406V23.0156ZM17.5 9.375C19.3281 9.375 20.875 10.8164 20.875 12.5742C20.875 13.5234 19.5039 15.7031 17.5 18.0938C15.4609 15.7031 14.125 13.5234 14.125 12.5742C14.125 10.8164 15.6367 9.375 17.5 9.375ZM20.3125 25.0195L14.6875 23.0156V16.3008C15.5312 17.5664 16.5156 18.6914 17.043 19.3242C17.1484 19.4648 17.3242 19.5 17.5 19.5C17.6406 19.5 17.8164 19.4648 17.9219 19.3242C18.3789 18.7969 19.1172 17.9531 19.8203 16.9688L20.3125 17.1445V25.0195ZM21.4375 25.0195V17.1445L26.5 15.2461L26.5352 23.2266L21.4375 25.0195ZM18.3438 12.75C18.3438 12.293 17.957 11.9062 17.5 11.9062C17.0078 11.9062 16.6562 12.293 16.6562 12.75C16.6562 13.2422 17.0078 13.5938 17.5 13.5938C17.957 13.5938 18.3438 13.2422 18.3438 12.75Z"
                    fill="#F17228"
                  />
                </svg>
                <Nav.Link className="tses-toggle" href="#">
                  Хүргэлтийн бүс
                </Nav.Link>
                <a href="">
                  <img src={see} alt="" />
                </a>
              </div>
            </div>
            <div className="user">
              <div className="menu-info">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="35"
                    height="35"
                    rx="10"
                    fill="#F2994A"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M17.5 8.53125C12.6836 8.53125 8.78125 12.4336 8.78125 17.25C8.78125 22.0664 12.6836 25.9688 17.5 25.9688C22.3164 25.9688 26.2188 22.0664 26.2188 17.25C26.2188 12.4336 22.3164 8.53125 17.5 8.53125ZM22 23.3672C20.7344 24.3164 19.1523 24.8438 17.5 24.8438C15.8125 24.8438 14.2305 24.3164 13 23.3672V22.875C13 21.6445 13.9844 20.625 15.25 20.625C15.6367 20.625 16.1992 21.0469 17.5 21.0469C18.7656 21.0469 19.3281 20.625 19.75 20.625C20.9805 20.625 22 21.6445 22 22.875V23.3672ZM23.0547 22.418C22.8086 20.7656 21.4375 19.5 19.75 19.5C19.0117 19.5 18.6602 19.9219 17.5 19.9219C16.3047 19.9219 15.9531 19.5 15.25 19.5C13.5273 19.5 12.1562 20.7656 11.9102 22.418C10.6445 21.0469 9.90625 19.2539 9.90625 17.25C9.90625 13.0664 13.2812 9.65625 17.5 9.65625C21.6836 9.65625 25.0938 13.0664 25.0938 17.25C25.0938 19.2539 24.3203 21.0469 23.0547 22.418ZM17.5 12.4688C15.7773 12.4688 14.4062 13.875 14.4062 15.5625C14.4062 17.2852 15.7773 18.6562 17.5 18.6562C19.1875 18.6562 20.5938 17.2852 20.5938 15.5625C20.5938 13.875 19.1875 12.4688 17.5 12.4688ZM17.5 17.5312C16.4102 17.5312 15.5312 16.6523 15.5312 15.5625C15.5312 14.5078 16.4102 13.5938 17.5 13.5938C18.5547 13.5938 19.4688 14.5078 19.4688 15.5625C19.4688 16.6523 18.5547 17.5312 17.5 17.5312Z"
                    fill="#F17228"
                  />
                </svg>
                <Nav.Link className="tses-toggle" href="#">
                  Хэрэглэгчийн мэдээлэл
                </Nav.Link>
                <a href="">
                  <img src={see} alt="" />
                </a>
              </div>
              <div className="line"></div>
              <div className="menu-info">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="35"
                    height="35"
                    rx="10"
                    fill="#F2994A"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M27.2031 15H24.4961L19.5742 9.58594C19.3633 9.33984 19.0117 9.33984 18.8008 9.55078C18.5547 9.76172 18.5547 10.1133 18.7656 10.3242L22.9844 15H11.9805L16.1992 10.3242C16.4102 10.1133 16.4102 9.76172 16.1641 9.55078C15.9531 9.33984 15.6016 9.33984 15.3906 9.58594L10.4688 15H7.79688C7.55078 15 7.375 15.2109 7.375 15.4219V15.7031C7.375 15.9492 7.55078 16.125 7.79688 16.125H8.35938L9.41406 23.6836C9.51953 24.5273 10.2227 25.125 11.0664 25.125H23.8984C24.7422 25.125 25.4453 24.5273 25.5508 23.6836L26.6055 16.125H27.2031C27.4141 16.125 27.625 15.9492 27.625 15.7031V15.4219C27.625 15.2109 27.4141 15 27.2031 15ZM24.4609 23.543C24.3906 23.8242 24.1797 24 23.8984 24H11.0664C10.7852 24 10.5742 23.8242 10.5039 23.543L9.48438 16.125H25.4805L24.4609 23.543ZM18.0625 18.0938C18.0625 17.8125 17.7812 17.5312 17.5 17.5312C17.1836 17.5312 16.9375 17.8125 16.9375 18.0938V22.0312C16.9375 22.3477 17.1836 22.5938 17.5 22.5938C17.7812 22.5938 18.0625 22.3477 18.0625 22.0312V18.0938ZM22 18.0938C22 17.8125 21.7188 17.5312 21.4375 17.5312C21.1211 17.5312 20.875 17.8125 20.875 18.0938V22.0312C20.875 22.3477 21.1211 22.5938 21.4375 22.5938C21.7188 22.5938 22 22.3477 22 22.0312V18.0938ZM14.125 18.0938C14.125 17.8125 13.8438 17.5312 13.5625 17.5312C13.2461 17.5312 13 17.8125 13 18.0938V22.0312C13 22.3477 13.2461 22.5938 13.5625 22.5938C13.8438 22.5938 14.125 22.3477 14.125 22.0312V18.0938Z"
                    fill="#F17228"
                  />
                </svg>
                <Nav.Link className="tses-toggle" href="#">
                  Миний захиалга
                </Nav.Link>
                <a href="">
                  <img src={see} alt="" />
                </a>
              </div>
            </div>
          </Nav>
          <Form className="d-flex form" onSubmit={handleSubmit}>
            <FormControl
              type="search"
              ref={(input) => (foodInput = input)}
              placeholder="&#128269; Хайх"
              id="search"
              className="me-2"
              aria-label="Search"
            />
            <div className="loginBusket">
              <Button variant="outline-none" className="searchpng">
                <a href="">
                  <img src={search} alt="" />
                </a>
              </Button>
              <div className="busket">
                <a href="">
                  <img src={busket} width={17} height={19} alt="" />
                </a>
                <Button
                  variant="outline-none"
                  className="sags text-orange fw-500"
                >
                  Сагс
                </Button>
              </div>
              <div className="login">
                <a href="">
                  <img src={human} alt="" />
                </a>
                <Button
                  variant="outline-none"
                  className="signin text-orange fw-500"
                >
                  Нэвтрэх
                </Button>
              </div>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuComponent;
