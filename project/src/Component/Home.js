import Slider from "./Slider";
import InfoPanelComponent from "./InfoPanelComponent";
import Category from "./Category"
import Breadcrumb from "./Breadcrumb";

function Home() {
    return (
        <div>
          <Slider />
          <InfoPanelComponent />
          <Breadcrumb/>
          <Category/>
        </div>
    );
  }
export default Home;
