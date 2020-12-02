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

export default function Start() {
	const [play, setPlay] = useState(false);
	const togglePlay = () => {
		setPlay(!play);
	};
	// below is just styling
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

	// Use wheelers' useStartJs to update this component -> play /setPlay

	return play ? (
		<Button
			className={classes.button}
			variant="contained"
			size="xlarge"
			color="secondary"
			endIcon={<StopIcon fontSize="large" />}
			play={play}
			onClick={togglePlay}
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
				play={play}
				onClick={togglePlay}
			>
				Start
			</Button>
		</ThemeProvider>
	);
};
