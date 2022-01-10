import MenuComponent from "./components/MenuComponent";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SubMenuComponent from "./components/SubMenuComponent";
import FoodSearch from "./components/FoodSearch";
import DeliveryArea from "./components/DeliveryArea"
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
          <Footer />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
