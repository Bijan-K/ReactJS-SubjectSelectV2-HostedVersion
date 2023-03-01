import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Holder from './components/Holder/Holder';
import OverLay from './components/Notes/OverLay';
import { SaveProvider } from './context/SaveContext';
import './App.css';

function App() {
  // Notez
  const [overlayState, setOverlayState] = useState(false);
  // Diving in
  return (
    <SaveProvider>
      <div className="flex flex-col h-max bg-gray-500 z-0 w-screen">
        {overlayState && <OverLay setOverlayState={setOverlayState}></OverLay>}
        <NavBar setOverlayState={setOverlayState} />
        <Holder />
      </div>
    </SaveProvider>
  );
}

export default App;
