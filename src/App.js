import React from 'react';

import './App.css';
import Greeting from './components/Greeting';
import Async from './components/Async';

function App() {
  return (
    <React.Fragment>
      <Greeting />
      <Async />
    </React.Fragment>
  );
}

export default App;
