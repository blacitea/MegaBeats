import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const Start = () => {
	const [play, setPlay] = useState(false);
	const handleClick = () => {
		setPlay(!play);
	};
	return (
		<Button
			variant="contained"
			color="primary"
			size="xlarge"
			endIcon={<PlayCircleOutlineIcon fontSize="large" />}
			onClick={handleClick}
		>
			Start
		</Button>
	);
};

export default Start;
