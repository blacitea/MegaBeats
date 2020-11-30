import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import StopIcon from '@material-ui/icons/Stop';

import green from '@material-ui/core/colors/green';
import {
	createMuiTheme,
	ThemeProvider,
	makeStyles,
} from '@material-ui/core/styles';

const Start = () => {
	const [play, setPlay] = useState(false);
	const handleClick = () => {
		setPlay(!play);
	};
	const theme = createMuiTheme({
		palette: {
			primary: green,
		},
	});

	const useStyles = makeStyles(theme => ({
		button: {
			margin: theme.spacing(1),
			minWidth: 120,
		},
	}));
	const classes = useStyles();

	return play ? (
		<Button
			className={classes.button}
			variant="contained"
			size="xlarge"
			color="secondary"
			endIcon={<StopIcon fontSize="large" />}
			onClick={handleClick}
		>
			Stop
		</Button>
	) : (
		<ThemeProvider theme={theme}>
			<Button
				className={classes.button}
				variant="contained"
				size="xlarge"
				color="primary"
				endIcon={<PlayCircleOutlineIcon fontSize="large" />}
				onClick={handleClick}
			>
				Start
			</Button>
		</ThemeProvider>
	);
};

export default Start;
