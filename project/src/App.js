import MenuComponent from './component/MenuComponent';
import Slider from './component/Slider';
import Footer from "./component/Footer";
import Tab from './component/Tab'
import './css/App.css';
import './css/menu.css';
import "./css/footer.css";
import './css/tab.css'
import "./css/button.css"

function App() {
  return (
    <div>
      <MenuComponent/>
      <Slider />
      <Footer />
    </div>
  )
}
export default App;
