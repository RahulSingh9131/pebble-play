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
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LogoutPage from "./pages/LogoutPage";
import PageNotFound from "./pages/PageNotFound";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/logout" element={<LogoutPage/>}/>
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
