import "./App.css";
import Home from "./Components/Home";
import Tv from "./Components/Tv";
import Mobile from "./Components/Mobile";
import Small from "./Components/Small";
import Kids from "./Components/Kids";
import Faq from "./Components/Faq";
// import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Home />
      <Tv />
      <Mobile />
      <Small />
      <Kids />
      <Faq />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
