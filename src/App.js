import React from 'react';
import Routes from './Routes'
import ContactContextProvider from './contexts/ContactContext'

function App(props) {
  return (
    <div className = "App">
    <ContactContextProvider>
      <Routes/>
    </ContactContextProvider>
    </div>
  );
}

export default App;
