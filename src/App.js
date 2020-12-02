import React, { useState, useEffect, useRef } from 'react';
import logo from './mintbean.png';
import Checkbox from '@material-ui/core/Checkbox';
import Checkboxes from './components/checkboxes';
import './styles/index.css';
import HelloSound from './components/Tones/hellosound';
import SoundButton from './components/Tones/SoundButton';
import Beats from './components/Tones/Beats';
import * as Tone from "tone";
import styled from "styled-components";

//SoundFx
import Clap from './components/sounds/Clap5.wav';
import Kick from './components/sounds/Kik6.wav';
import Hat from './components/sounds/Hats41.wav';
import Alt from './components/sounds/AltSD6.wav';
import OpenHat from "./components/sounds/OH8.wav";
import Snare from "./components/sounds/Snare11.wav";

import SoundCheckBox from './components/Tones/SoundCheckBox';

import Start from './components/buttons/Start';
import BPM from './components/buttons/BPM';

// ==
// Below is practice with Tone js controls
// (function () {
  // Membrane Synth https://tonejs.github.io/docs/r12/MembraneSynth
  // const sampler = new Tone.Sampler({
  //   urls: {
  //     A1: "A1.mp3",
  //     A2: "A2.mp3",
  //   },
  //   baseUrl: "https://tonejs.github.io/audio/casio/",
  //   onload: () => {
  //     sampler.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.5);
  //   },
  // }).toDestination();

	// practice with Loop controls
  // const loop = new Tone.Loop(function (time) {
    //triggered every eighth note.
  //   console.log(time);
  //   sampler.triggerAttackRelease("C2", "2n");
  // }, "2n").start(0);

  
  // Play Controls
//   let playing = false;
//   document.querySelector("body").addEventListener("click", function () {
//     if (!playing) {
//       Tone.Transport.start();
//       playing = true;
//     } else {
//       Tone.Transport.stop();
//     }
//   });
// })();




// below does not play
const player = new Tone.Player(
  './components/sounds/Clap5.wav'
).toDestination();
player.loop = true;
player.autostart = true;

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

const config = {
  tracks: ["Clap", "Kick", "Hat", "Alt", "OpenHat", "Snare"],
  samples: {
    Clap: "./components/sounds/Clap5.wav",
    Kick: "./components/sounds/Kik6.wav",
    Hat: "./components/sounds/Hats41.wav",
    Alt: "./components/sounds/AltSD6.wav",
    OpenHat: "./components/sounds/OH8.wav",
    Snare: "./components/sounds/Snare11.wav",	
  },
};

const initialStepState = {
  Clap: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  Kick: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  Hat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  Alt: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  OpenHat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  Snare: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};
//  ==



function App() {

	const [stepState, SetSteps] = useState(initialStepState);
	const [buffers, setBuffers] = useState({});
	const [currentStep, setCurrentStepState] = useState(0);

	const [start, startButton] = useState();

	const buffersRef = useRef(buffers);
  buffersRef.current = buffers;
  const stepsRef = useRef(stepState);
  stepsRef.current = stepState;
  const currentStepRef = useRef(currentStep);
  currentStepRef.current = currentStep;

	// Play controls;
	useEffect(() => {
    if (start) {
      Tone.Transport.start();
    } else {
      Tone.Transport.stop();
      setCurrentStepState(0);
    }
	}, [start]);
	
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
