import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Wedding from "./Pages/Wedding";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/wedding" element={<Wedding/>} />
        <Route path="*" element={<Error/>}  />
      </Routes>
    </Router>
  );
}

export default App;
