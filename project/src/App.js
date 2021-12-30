import MenuComponent from './component/MenuComponent';
import Slider from './component/Slider';
import Footer from "./component/Footer";
import Button from "./component/Button"
import SeeAll from "./component/SeeAllButton"
import './css/App.css';
import './css/menu.css';
import "./css/footer.css";
import "./css/button.css"


function App() {
  return (
    <div>
      <MenuComponent/>
      <Button value="sda" className=" my-5 active-button w-25"/>
      <SeeAll />
      <Slider />
      <Footer />
    </div>
  )
}
export default App;
