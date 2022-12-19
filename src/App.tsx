import React from 'react';
import logo from './logo.svg';
import './App.css';
import UploadImageToS3WithNativeSdk from './UploadFile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <UploadImageToS3WithNativeSdk />

      </header>
    </div>
  );
}

export default App;
