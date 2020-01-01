import React, {useState} from 'react';
import './SignUp.css';
import { TextField, Snackbar, IconButton, makeStyles, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const SignUp = (props) => {
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });

    const [flash, setFlash] = useState({
        flash: "",
        isCorrect: ""
    });
    
    const updateInput = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
};

  const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const submitInput = (e) => {
    e.preventDefault();
    fetch("/auth/signup", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(
        res => setFlash({ flash: res.flash, isCorrect: true }),
        err => setFlash({ flash: err.flash, isCorrect: false })
      );
  };
    return(
<div>
    <h1>Sign Up !</h1>
    <form onSubmit={submitInput}>
    <TextField id="input" type="text" name="firstname" placeholder="firstname" onChange={updateInput} variant="outlined" /> 
    <TextField id="input" type="text" name="lastname" placeholder="lastname" onChange={updateInput} variant="outlined" /> 
    <TextField id="input" type="email" name="email" placeholder="email" onChange={updateInput} variant="outlined"/>
    <TextField id="input" type="password" name="password" placeholder="password" onChange={updateInput} variant="outlined"/> 
    <TextField id="input" type="password" name="passwordconf" placeholder="confirm password" onChange={updateInput} variant="outlined"/> 
    <Button id="button" variant="contained" color="primary" onClick={handleClick} style={{width: "100px", height: '50px'}}>SUBMIT</Button>
    <Snackbar anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
      message={(flash.isCorrect === true) ? <span style={{color: "green"}}>Wohooo you're logged !</span> : <span style={{color: "red"}}>Damn, it didn't work</span>}
        action={[ <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </form>

</div>
    );
}

export default SignUp ;