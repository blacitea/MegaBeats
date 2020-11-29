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
import SoundCheckBox from './components/Tones/SoundCheckBox';

function App() {
	return (
		<div className="App">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				<code>App.js</code> is the entrypoint to your app.
			</p>
			<h2>HAPPY HACKING!</h2>
			<h3>MegaBeats</h3>
			<p>get the party started.</p>
			<p>Just added checkboxes to show how eaasy it is</p>
			<Checkbox />
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
			<Checkboxes />
			<HelloSound />
			<SoundButton name="S1" sound={S1} />
			<SoundButton name="S2" sound={S2} />
			<SoundButton name="S3" sound={S3} />
			<SoundButton name="S4" sound={S4} />
			<hr />
			<p>Check box to trigger sounds</p>
			<SoundCheckBox sound={S1} />
			<SoundCheckBox sound={S2} />
			<SoundCheckBox sound={S3} />
			<SoundCheckBox sound={S4} />
		</div>
	);
}

export default App;
