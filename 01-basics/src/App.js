import React from 'react';
import logo from './logo.svg';
import './style.css';

//creates a react component
function App() {
  return (
    <React.Fragment>
      <h1 style={
        {
        color:'green',
        backgroundColor: 'yellow'
        }
    }>Hello world</h1>
      <p>Let there be light!</p>
      <img src={logo}/>
      <img src={require('./apples.jpeg')}/>
    </React.Fragment>

  )
}

export default App;