import React from 'react';
import logo from './mintbean.png';
import Checkbox from '@material-ui/core/Checkbox';
import Checkboxes from './components/checkboxes';
import './styles/index.css';
import HelloSound from './components/Tones/hellosound';
import SoundButton from './components/Tones/SoundButton';
import Beats from './components/Tones/Beats';
import * as Tone from "tone";
import styled from "styled-components";

//Clips
import S1 from './components/sounds/Clap5.wav';
import S2 from './components/sounds/Kik6.wav';
import S3 from './components/sounds/Hats41.wav';
import S4 from './components/sounds/AltSD6.wav';
import SoundCheckBox from './components/Tones/SoundCheckBox';

import Start from './components/buttons/Start';
import BPM from './components/buttons/BPM';

// ==
const player = new Tone.Player(
  "https://tonejs.github.io/audio/drum-samples/breakbeat.mp3"
).toDestination();
player.loop = true;
player.autostart = false;

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  background: linear-gradient(to bottom right, #222, #0a0a0a);
  border: 2px solid black;
  border-radius: 4px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  flex: 1;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  padding: 0px 20px 10px;
  display: flex;
`;
//  ==



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
			<Container>
				<ButtonContainer>
					<Beats />

				</ButtonContainer>
			</Container>
			<br />
			<Start />
			<BPM />
		</div>
	);
}
export default App;
