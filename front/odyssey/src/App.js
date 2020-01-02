import React from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
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
            <Router>
        <Switch>
            <Route exact path="/" ><SignUp /></Route>
            <Route path="/signup" ><SignUp /></Route>
            <Route path="/signin" ><SignIn /></Route>
            <Route path="/profile" ><Profile /></Route>
        </Switch>
    </Router>
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
