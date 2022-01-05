import Slider from "./Slider";
import InfoPanelComponent from "./InfoPanelComponent";
import Category from "./Category"
import Login from "./Login"
import Password from "./Password";
import Register from "./Register"

function Home() {
    return (
        <div>
          <Slider />
          <InfoPanelComponent />
          <Category/>
          <Login/>
          <Password/>
          <Register/>
        </div>
    );
  }
export default Home;
