import React, { useState } from 'react';
import SoundCheckBox from './SoundCheckBox';
import S1 from '../sounds/Clap5.wav';
import S2 from '../sounds/Kik6.wav';
import S3 from '../sounds/Hats41.wav';
import S4 from '../sounds/AltSD6.wav';
import S5 from '../sounds/OH8.wav';
import S6 from '../sounds/Snare11.wav';

const Beats = props => {
	const [beats, setBeats] = useState({
		A1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		B1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		C1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		D1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		E1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		F1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	});
	return (
		<section>
			{beats.A1.map((beat, index) => (
				<SoundCheckBox sound={S1} key={`A1_${index}`} />
			))}
			<hr />
			{beats.B1.map((beat, index) => (
				<SoundCheckBox sound={S2} key={`B1_${index}`} />
			))}
			<hr />
			{beats.C1.map((beat, index) => (
				<SoundCheckBox sound={S3} key={`C1_${index}`} />
			))}
			<hr />
			{beats.D1.map((beat, index) => (
				<SoundCheckBox sound={S4} key={`D1_${index}`} />
			))}
			<hr />
			{beats.E1.map((beat, index) => (
				<SoundCheckBox sound={S5} key={`E1_${index}`} />
			))}
			<hr />
			{beats.F1.map((beat, index) => (
				<SoundCheckBox sound={S6} key={`F1_${index}`} />
			))}
		</section>
	);
};

export default Beats;
