import MenuComponent from "./component/MenuComponent";
import Footer from "./component/Footer";
import Home from "./component/Home";
import SubMenuComponent from "./component/SubMenuComponent";
import FoodSearch from "./component/FoodSearch";
import Login from "./component/Login"
import DeliveryArea from "./component/DeliveryArea"
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import "./css/menu.css";
import "./css/footer.css";
import "./css/TextField.css";
import "./css/button.css";
import "./css/tab.css";
import "./css/info.css";
import "./css/card.css";
import "./css/category.css"
import "./css/search.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Dropdown from "./component/Dropdown";
import Login from "./component/Login";
import ConfirmPass from "./component/Password";
import UserInfo from "./component/UserInformation";
import Register from "./component/Register";
import RecoverMail from "./component/RecoverMail";
import NewPass from "./component/RecoverPass";


function App() {
  return (
    <BrowserRouter>
      <div>
        <MenuComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={SubMenuComponent} />
          <Route path="/search" component={FoodSearch} />
<<<<<<< HEAD
          <Route path="/area" component={DeliveryArea} />
          <Route path="/login" component={Login}/>
=======
          <Route path="/Area" component={DeliveryArea} />
>>>>>>> 718587ebadd04c847a808cc309de0679d679c035
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
