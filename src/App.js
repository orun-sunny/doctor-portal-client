import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div className="App">
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />}>
        </Route>
          {/* <Route path="me" element={<OwnUserProfile />} />
          <Route path=":id" element={<UserProfile />} /> */}
  
      </Routes>
    </BrowserRouter>
       
    
    </div>
  );
}

export default App;
