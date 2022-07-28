import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Reviews from "./Reviews";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col">
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Reviews></Reviews>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
