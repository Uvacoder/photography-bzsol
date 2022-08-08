import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Portre from "./Pages/Portre";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/portrait" element={<Portre/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Error/>}  />
      </Routes>
    </Router>
  );
}

export default App;
