import MenuComponent from "./component/MenuComponent";
import Footer from "./component/Footer";
import Home from "./component/Home";
import SubMenuComponent from "./component/SubMenuComponent";
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
import {BrowserRouter, Route, Switch} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div>
        <MenuComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/FoodMenu" component={SubMenuComponent} />
          <Route path="/Area" component={SubMenuComponent} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
