import React from 'react';
import ReactDOM from 'react-dom';
import {Button,Typography} from '@material-ui/core';
import './App.css';
import AppBar from '@material-ui/core/AppBar';

function App() {
  
  return (
    <div className="App">
      <header>
        <AppBar color="black">
            <nav>
               <ui>
                  <li><a href="#">Home</a></li>
                  <li><a href="">AboutUs</a></li>
                  <li><a href="">ContactUs</a></li>
               </ui>
            </nav>
          </AppBar>
      </header><br/><br/><br/><br/>
      <div className="section">
        <center>
      <Typography  variant="h2" color="secondary">Hello World!!</Typography>
      <label>UserName:</label><input type="text" required/><br/><br/>
      <label>Password:</label><input type="password" required/><br/><br/>
      <Button color="primary" variant="outlined">Login</Button><br/><br/>
      <p>New User? Register Here</p> 
      <Button color="primary" variant="outlined">Signup</Button> </center>
    </div>
    <footer>
           Copyrights &copy; 2021
    </footer>
    </div>
  );
}

export default App;
