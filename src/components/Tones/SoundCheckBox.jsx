import React, { useEffect, useState, useRef } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { Sampler } from 'tone';

export const SoundCheckBox = props => {
	const [isLoaded, setLoaded] = useState(false);
	const [isChecked, setChecked] = useState(false);
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

	const handleCheck = event => {
		setChecked(prev => {
			if (!prev) {
				sampler.current.triggerAttack('A1');
			}
			return !prev;
		});
	};

	return (
		<Checkbox disabled={!isLoaded} checked={isChecked} onChange={handleCheck} />
	);
};

export default SoundCheckBox;
