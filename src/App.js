import React from 'react';
import logo from './mintbean.png';
import Checkbox from '@material-ui/core/Checkbox';
import Checkboxes from './components/checkboxes';
import './styles/index.css';
import HelloSound from './components/Tones/hellosound';
import SoundButton from './components/Tones/SoundButton';

//Clips
import S1 from './components/sounds/Clap5.wav';
import S2 from './components/sounds/Kik6.wav';
import S3 from './components/sounds/Hats41.wav';
import S4 from './components/sounds/AltSD6.wav';

function App() {
  return (
    <div className="App">
      <p>
        <img src={logo} className="App-logo" alt="logo" />
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
      <HelloSound />
      <SoundButton name="S1" sound={S1} />
      <SoundButton name="S2" sound={S2} />
      <SoundButton name="S3" sound={S3} />
      <SoundButton name="S4" sound={S4} />
    </div>
  );
}

export default App;
