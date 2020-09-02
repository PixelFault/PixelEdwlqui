import React from 'react';
import './App.css';
import UploadButton from "./components/UploadButton";
import ipfsClient from "ipfs-http-client";
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";

const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https', });
//QmQ1xrzGBG9U4AECEWNuAxfs59cELzfznRrJUYVp8jnPPC
function App() {
  const [data, setData] = React.useState(null);
  const [ipfsHash, setIpfsHash] = React.useState('');
  const [ipfsAddr, setIpfsAddr] = React.useState('');

  const handleSumbitIpfs = async () => {
    if (data) {
      try {
        const file = await ipfs.add(data);

        setIpfsHash(file.path);
        setIpfsAddr(`https://ipfs.infura.io/ipfs/${file.path}`);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          PixelEdwlqui
        </p>
        <div className="App-buttons">
          <UploadButton text="Upload" variant="outlined" color="secondary" uploadExtractor={setData} />
        </div>
        <div className="App-buttons">
          <Button variant={"outlined"} color={"secondary"} onClick={handleSumbitIpfs}>Submit</Button>
        </div>
        <div className="App-buttons">
          <Typography>
            {ipfsHash !== '' ? `Your file has been stored to ${ipfsAddr}.` : 'Upload a file to PixelEdwlqui and submit it to the IPFS network.'}
          </Typography>
        </div>
      </header>

    </div>
  );
}

export default App;
