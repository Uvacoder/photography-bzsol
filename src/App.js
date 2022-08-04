import { Gallery } from "react-photoswipe-gallery";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Error from "./Pages/Error";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="*" element={<Error/>}  />
      </Routes>
    </Router>
  );
}

export default App;
