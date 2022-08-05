import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Gallery from "./Pages/Photos";
import Contact from "./Pages/Contact";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Error/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Error/>}  />
      </Routes>
    </Router>
  );
}

export default App;
