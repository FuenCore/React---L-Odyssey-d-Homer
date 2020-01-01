import React from 'react';
import SignUp from './components/SignUp'
import './App.css'; 
import { Grid, Paper, MuiThemeProvider } from '@material-ui/core';


function App() {
  return (
    <div className="App">
    <div className="container">
    <MuiThemeProvider id="container">
        <Grid  container alignItems='center' style={{ height:  '80%', width: '80%'}}>
        <Grid  alignItems="center" item  xs={12}>
            <Paper elevation={8}>
            <Grid  container alignItems='center' justify='center'>
            <Grid  item xs={12}  sm={6} style={{ 'text-align':  'center' }}>
            <img id="homer" alt="Homer simpsons eating a donut" src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png"  />
            </Grid> 
            <Grid  item xs={12} sm={6} alignContent='center'>
                <SignUp id="signup" />
            </Grid>
            </Grid>
            </Paper>
        </Grid> 
        </Grid>
    </MuiThemeProvider>
    </div>
    </div>
  );
}

export default App;
