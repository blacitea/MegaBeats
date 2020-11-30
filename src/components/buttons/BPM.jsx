import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

const BPM = () => {
	const [bpm, setBPM] = useState();
	const handleChange = event => setBPM(event.target.value);

	const useStyles = makeStyles(theme => ({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
	}));
	const classes = useStyles();
	return (
		<>
			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel htmlFor="outlined-age-native-simple">BPM</InputLabel>
				<Select
					native
					value={bpm}
					onChange={handleChange}
					label="BPM"
					inputProps={{
						name: 'bpm',
						id: 'outlined-age-native-simple',
					}}
				>
					<option value={80}>80</option>
					<option value={120}>120</option>
					<option value={160}>160</option>
				</Select>
			</FormControl>
		</>
	);
};

export default BPM;
