import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DeliveryArea from "./components/DeliveryArea";
import FoodSearch from "./components/FoodSearch";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import MenuComponent from "./components/MenuComponent";
import PasswordRecovery from "./components/PasswordRecovery";
import Register from "./components/Register";
import SubMenuComponent from "./components/SubMenuComponent";
import Policy from "./components/Policy"
import Confidentiality from "./components/Confidentiality"
import NewPassword from "./components/RecoverPass"
import "./css/App.css";
import "./css/button.css";
import "./css/card.css";
import "./css/category.css";
import "./css/footer.css";
import "./css/info.css";
import "./css/menu.css";
import "./css/search.css";
import "./css/tab.css";
import "./css/TextField.css";
import "./css/footerPage.css"



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
          <Route path="/policy" component={Policy}/>
          <Route path="/confidentiality" component={Confidentiality}/>
          <Route path="/new-password" component={NewPassword}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;
