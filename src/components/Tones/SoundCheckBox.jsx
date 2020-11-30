import React, { useEffect, useState, useRef } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { Sampler } from 'tone';

export const SoundCheckBox = props => {
	const [isLoaded, setLoaded] = useState(false);
	const [isChecked, setChecked] = useState(false);
	const sampler = useRef(null);
	const A2 = props.sound;

	useEffect(() => {
		// console.log(props.key);
		sampler.current = new Sampler(
			{ A2 },
			{
				onload: () => {
					setLoaded(true);
				},
			}
		).toDestination();
	}, [A2, props.key]);

	const handleCheck = event => {
		setChecked(prev => {
			if (!prev) {
				sampler.current.triggerAttack('A2');
			}
			return !prev;
		});
	};

	return (
		<Checkbox disabled={!isLoaded} checked={isChecked} onChange={handleCheck} />
	);
};

export default SoundCheckBox;
