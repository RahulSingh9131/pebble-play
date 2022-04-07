import "./App.css";
import {Route,Routes} from "react-router-dom";
import MockAPI from "./MockAPI";
import Homepage from "./pages/Homepage";
import VideoPage from "./pages/VideoPage";
import WatchLater from "./pages/WatchLater";
import Likepage from "./pages/Likepage";
import HistoryPage from "./pages/HistoryPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/historypage" element={<HistoryPage/>}/>
        <Route path="/likepage" element={<Likepage/>}/>
        <Route path="/watchlater" element={<WatchLater/>}/>
        <Route path="/videopage" element={<VideoPage/>}/>
        <Route path="/mock-api" element={<MockAPI/>}/>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
