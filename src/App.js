import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Portrait from "./Pages/Portre";
import Architecture from "./Pages/Architecture";
import Interior from "./Pages/Interior";
import Ads from "./Pages/Advertisement";

function App() {
  
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/portrait" element={<Portrait/>} />
        <Route path="/architecture" element={<Architecture/>} />
        <Route path="/interior" element={<Interior/>} />
        <Route path="/advertisement" element={<Ads/>} />
        <Route path="*" element={<Error/>}  />
      </Routes>
    </Router>
  );
}

export default App;
