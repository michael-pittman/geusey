import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var DriveIn = require('react-drive-in');
var $mountNode = document.getElementById('drive-in');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DriveIn
        show="http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.mp4"
        poster="http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.jpg"
        />
      </div>

    );
  }
}

export default App;
