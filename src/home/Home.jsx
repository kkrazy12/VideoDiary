import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import "./home.scss";
import List from "../components/Slider";
import "../App.jsx";

const home = () => {
  return (
    <div className="home">
      <Navbar/>
  <Banner/>
<List/>
<List/>
<List/>
<List/>
    </div>
  )
}

export default home
