import MenuComponent from "./components/MenuComponent";
import Home from "./components/Home";
import SubMenuComponent from "./components/SubMenuComponent";
import FoodSearch from "./components/FoodSearch";
import Login from "./components/Login"
import DeliveryArea from "./components/DeliveryArea"
import Footer from "./components/Footer"
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
import PasswordRecovery from "./components/PasswordRecovery"
import Dropdown from "./components/Dropdown";
import ConfirmPass from "./components/Password";
import UserInfo from "./components/UserInformation";
import Register from "./components/Register";
import RecoverMail from "./components/RecoverMail";
import NewPass from "./components/RecoverPass";
import "./css/category.css";


function App() {
  return (
    <BrowserRouter>
      <div>
        <MenuComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={SubMenuComponent} />
          <Route path="/search" component={FoodSearch} />
          <Route path="/area" component={DeliveryArea} />
          <Route path="/login" component={Login}/>
          <Route path="/password-recovery" component={PasswordRecovery}/>
          <Route path="/register" component={Register}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;
