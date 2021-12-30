import Slider from "./component/Slider"
import MenuComponent from './component/MenuComponent';
import Footer from "./component/Footer";
import Tab from './component/Tab'
import './css/App.css';
import './css/menu.css';
import "./css/footer.css";
import "./css/TextField.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/button.css";
import './css/tab.css'

function App() {
  return (
    <div>
      <MenuComponent />
      <Slider />
      <Footer />
    </div>
  )
}
export default App;
