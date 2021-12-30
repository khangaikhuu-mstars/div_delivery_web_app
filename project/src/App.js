import MenuComponent from './component/MenuComponent';
import Slider from './component/Slider';
import Footer from "./component/Footer";
import './css/App.css';
import './css/menu.css';
import "./css/footer.css";
import "./css/button.css"
import "./css/card.css"

import Cards from "./component/Cards"

import './css/tab.css'

function App() {
  return (
    <div>
      <MenuComponent/>
      <Slider />
      <Footer />
      <Cards/>
    </div>
  )
}
export default App;
