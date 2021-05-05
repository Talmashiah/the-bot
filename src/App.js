import logo from './logo.svg';
import React, {useEffect, useRef} from 'react';
import './App.css';

const App = () => {

  const iframeRef = useRef();

  useEffect(() => {
  console.log({iframeRef: iframeRef.current});
  },[iframeRef.current])


  return <iframe ref={iframeRef} src="https://chats.landbot.io/v3/H-897567-PK2ELDB32ND30V1H/index.html"></iframe>
}

export default App;
