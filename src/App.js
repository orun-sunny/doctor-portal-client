import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
          </Route>
        

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
