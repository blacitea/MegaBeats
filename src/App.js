import React from 'react';
import logo from './mintbean.png';
// import Checkboxes from './components/checkboxes'
import { Checkbox } from "@material-ui/core";
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <code>App.js</code> is the entrypoint to your app.
      </p>
      <h2>HAPPY HACKING!</h2>
      <h3>MegaBeats</h3>
      <p>Click the link below to see the code in full</p>
      <a
        className="App-link"
        href="https://github.com/blacitea/MegaBeats"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repo
      </a>
      <div>
          Symbols
        <>
          <Checkbox color="primary" />
          <Checkbox color="primary" />
          <Checkbox color="primary" />
          <Checkbox color="primary" />
        </>
      </div>
      <div>
          High-Hat
        <>
          <Checkbox color="primary" />
          <Checkbox color="primary" />
          <Checkbox color="primary" />
          <Checkbox color="primary" />
        </>
      </div>
      <div>
          Snare
        <>
          <Checkbox color="primary" />
          <Checkbox color="primary" />
          <Checkbox color="primary" />
          <Checkbox color="primary" />
        </>
      </div>
    </div>
  );
}

export default App;
