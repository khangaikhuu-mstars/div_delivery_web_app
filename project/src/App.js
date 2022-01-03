import Slider from "./component/Slider";
import MenuComponent from "./component/MenuComponent";
import Footer from "./component/Footer";
import Home from "./component/Home"
import "./css/App.css";
import "./css/menu.css";
import "./css/footer.css";
import "./css/TextField.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/button.css";
import "./css/tab.css";
import "./css/button.css";
import { BrowserRouter, Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Home}/>
      </div>
    </BrowserRouter>
  );
}
export default App;
