import "./App.css";
import Navbar from "./component/navbar.jsx";
import Section1 from "./component/section1.jsx";
import { register } from "swiper/element/bundle";

register();

function App() {
  return (
    <>
      <Navbar />
      <Section1 />
    </>
  );
}

export default App;
