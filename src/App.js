import "./App.css";
import {Route,Routes} from "react-router-dom";
import MockAPI from "./MockAPI";
import Homepage from "./pages/Homepage";
import VideoPage from "./pages/VideoPage";
import WatchLater from "./pages/WatchLater";
import Likepage from "./pages/Likepage";
import HistoryPage from "./pages/HistoryPage";
import PlaylistPage from "./pages/PlaylistPage";
import SinglePlaylistPage from "./pages/SinglePlaylistPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/playlist" element={<PlaylistPage/>}/>
        <Route path="/playlist/:playId" element={<SinglePlaylistPage/>}/>
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
