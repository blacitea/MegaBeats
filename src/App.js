import React from 'react';
import logo from './mintbean.png';
import Checkbox from '@material-ui/core/Checkbox';
import Checkboxes from './components/checkboxes';
import './styles/index.css';
import HelloSound from './components/Tones/hellosound';

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
		</div>
	);
}

export default App;
