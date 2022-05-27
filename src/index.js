import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import { WatchProvider } from "./context/WatchContext";
import { LikeProvider } from "./context/LikeContext";
import { HistoryProvider } from "./context/HistoryContext";
import { PlaylistProvider } from "./context/PlaylistContext";
import { VideoProvider } from "./context/VideoContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VideoProvider>
        <WatchProvider>
          <LikeProvider>
            <HistoryProvider>
              <PlaylistProvider>
                <App />
              </PlaylistProvider>
            </HistoryProvider>
          </LikeProvider>
        </WatchProvider>
      </VideoProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
