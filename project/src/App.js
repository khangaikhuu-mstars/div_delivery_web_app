import Menu_Component from './component/Menu_Component';
import Slider from './component/Slider';
import Footer from "./component/Footer";
import './css/App.css';
import './css/menu.css';
import "./css/footer.css";

function App() {
  return (
    <div>
      <Menu_Component/>
      <Slider />
      <Footer />
    </div>
  )
}
export default App;
