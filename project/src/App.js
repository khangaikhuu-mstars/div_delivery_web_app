import MenuComponent from './Component/MenuComponent';
import Slider from './Component/Slider';
import Footer from "./Component/Footer";
import './css/App.css';
import './css/menu.css';
import "./css/footer.css";

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
