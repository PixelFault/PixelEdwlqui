import React from 'react';
import './App.css';
import UploadButton from "./components/UploadButton";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          PixelEdwlqui
        </p>
        <UploadButton text="Upload" variant="outlined" color="secondary" uploadExtractor={setData}/>
      </header>
    </div>
  );
}

export default App;
