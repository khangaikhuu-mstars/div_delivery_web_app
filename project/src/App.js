import Slider from "./component/Slider"
import MenuComponent from './component/MenuComponent';
import Footer from "./component/Footer";
import Tab from './component/Tab'
import InfoPanelComponent from "./component/InfoPanelComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/menu.css';
import "./css/footer.css";
import "./css/TextField.css"
import "./css/button.css";
import './css/tab.css';
import './css/info.css';

function App() {
  return (
    <div>
      <MenuComponent />
      <Slider />
      <InfoPanelComponent />
    </div>
  )
}
export default App;
