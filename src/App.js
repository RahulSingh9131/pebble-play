import "./App.css";
import {Route,Routes} from "react-router-dom";
import MockAPI from "./MockAPI";
import Homepage from "./pages/Homepage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mock-api" element={<MockAPI/>}/>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
