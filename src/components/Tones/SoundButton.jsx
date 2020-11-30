import React, { useEffect, useState, useRef } from 'react';
import { Sampler } from 'tone';

const SoundButton = props => {
	const [isLoaded, setLoaded] = useState(false);
	const sampler = useRef(null);
	const A1 = props.sound;

	useEffect(() => {
		sampler.current = new Sampler(
			{ A1 },
			{
				onload: () => {
					setLoaded(true);
				},
			}
		).toDestination();
	}, [A1]);

	const handleClick = () => sampler.current.triggerAttack('A1');

	return (
		<button disabled={!isLoaded} onClick={handleClick}>
			{props.name}
		</button>
	);
};

export default SoundButton;
