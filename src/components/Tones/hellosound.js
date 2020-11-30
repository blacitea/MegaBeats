import React, { useState, useRef, useEffect } from 'react';
import { Sampler } from 'tone';
import A1 from '../sounds/AltSD6.wav';

//codesandbox.io/s/tone-sampler-example-sjohx?file=/src/index.js:0-692

const HelloSound = () => {
	const [isLoaded, setLoaded] = useState(false);
	const sampler = useRef(null);

	useEffect(() => {
		sampler.current = new Sampler(
			{ A1 },
			{
				onload: () => {
					setLoaded(true);
				},
			}
			// use toDestination instead of toMaster
		).toDestination();
	}, []);

	const handleClick = () => sampler.current.triggerAttack('A1');

	return (
		<div>
			<button disabled={!isLoaded} onClick={handleClick}>
				start
			</button>
		</div>
	);
};

export default HelloSound;
