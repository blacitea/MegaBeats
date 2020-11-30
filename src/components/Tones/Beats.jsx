import React, { useState } from 'react';
import SoundCheckBox from './SoundCheckBox';
import S1 from '../sounds/Clap5.wav';

const Beats = props => {
	const [beats, setBeats] = useState({
		A1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		// B1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		// C1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		// D1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	});
	return (
		<section>
			{beats.A1.map(beat => (
				<SoundCheckBox sound={S1} />
			))}
		</section>
	);
};

export default Beats;
