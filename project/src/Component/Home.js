import Slider from "./Slider";
import InfoPanelComponent from "./InfoPanelComponent";
import Category from "./Category"
import Login from "./Login"
import Password from "./Password";

function Home() {
    return (
        <div>
          <Slider />
          <InfoPanelComponent />
          <Category/>
          <Login/>
          <Password/>
        </div>
    );
  }
export default Home;
