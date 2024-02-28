import Body from "./Components/Body/Body";
import { Routes, Route } from "react-router-dom";

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
