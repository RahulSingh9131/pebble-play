import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import { WatchProvider } from "./context/WatchContext";
import { LikeProvider } from "./context/LikeContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WatchProvider>
        <LikeProvider>
          <App />
        </LikeProvider>
      </WatchProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
