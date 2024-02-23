import Navbar from "./Components/Navbar/Navbar";
import Body from "./Components/Body/Body";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Body />} />
      </Routes>
    </div>
  );
}

export default App;
