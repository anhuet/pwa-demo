import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UploadImageToS3WithNativeSdk from "./UploadFile";
import NofificationFB from "./NofificationFB";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UploadImageToS3WithNativeSdk />
        <NofificationFB />
      </header>
    </div>
  );
}

export default App;
