import MenuComponent from "./component/MenuComponent";
import Footer from "./component/Footer";
import Home from "./component/Home";
import SubMenuComponent from "./component/SubMenuComponent";
import FoodSearch from "./component/FoodSearch";
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
import "./css/category.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <MenuComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/FoodMenu" component={SubMenuComponent} />
          <Route path="/search" component={FoodSearch} />
          <Route path="/Area" component={DeliveryArea} />

        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
