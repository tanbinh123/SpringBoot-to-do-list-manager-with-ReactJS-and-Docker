import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {      
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
    '& label.Mui-focused': {
        color: '#E6B447',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#E6B447',
        },
        '&:hover fieldset': {
          borderColor: '#E6B447',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#E6B447',
        },
   },
   '& .MuiFormLabel-root' : {
       color: '#E6B447'
   },
   '& .MuiInputBase-input' : {
       color: 'white'
   }
  },
}));



export default function InputBox({getTask}) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    getTask(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">      
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Task"
          multiline
          rowsMax={4}
          value={value}
          onChange={handleChange}
          variant="outlined"
        />        
      </div>
    </form>
  );
}