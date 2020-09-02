import React from 'react';
import './App.css';
import UploadButton from "./components/UploadButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          PixelEdwlqui
        </p>
        <UploadButton text="Upload" variant="outlined" color="secondary"/>
      </header>
    </div>
  );
}

export default App;
