import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment/Appointment";

import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/appointment" element={<Appointment />}>
          {/* <Route path="/appointment" element={<Appointment />} /> */}
          </Route>
        

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
