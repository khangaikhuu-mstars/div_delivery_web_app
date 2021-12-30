import Slider from "./component/Slider"
import MenuComponent from './component/MenuComponent';
import Footer from "./component/Footer";
import Search from "./component/Search";
import Register from "./component/Register";
import Login from "./component/Login";
import Dropdown from "./component/Dropdown";
import UserInfo from "./component/User_Information";
import './css/App.css';
import './css/menu.css';
import "./css/footer.css";
import "./css/TextField.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import RecoverMail from "./component/RecoverMail";
import ConfirmPass from "./component/Password";
import NewPass from "./component/RecoverPass";
import "./css/button.css";



function App() {
  return (
    <div>
      <MenuComponent />
      <Slider />
      <div className="App-header1">
        <Register />
      </div>
      <div className="App-header1">
        <Login />
      </div>
      <div className="App-header1">
        <Dropdown />
      </div>
      <div className="App-header1">
        <Search />
      </div>
      <div className="App-header1">
        <UserInfo />
      </div>
      <div className="App-header1">
        <RecoverMail />
      </div>
      <div className="App-header1">
        <ConfirmPass />
      </div>
      <div className="App-header1">
        <NewPass />
      </div>

      <Footer />
    </div>
  )
}
export default App;
