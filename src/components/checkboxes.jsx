import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        value="Symbol"
        label="Start"
      />
      <Checkbox 
        color="primary"
      />
      <Checkbox 
        color="primary"
      />
      <Checkbox 
        color="primary"
      />      
    </div>
  );
}