import React, { Component } from 'react';
import logo from './TCSlogo.svg';
import './App.css';

const step = 1, 
      init = 0, 
      max = 5,
      message = 'Count is max'; 

class Counter extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span id="count">Count: {count}</span>
          <span id="message"></span>
          <br />
          <button id="upButton" onClick={up}>UP</button>
          <button id="downButton" onClick={down}>DOWN</button>
          <button id="resetButton" onClick={reset}>RESET</button>
        </header>
      </div>
    );
  }
}

let count = init;

function up() {
  count+=step;
  checkMax();
}

function down() {
  count-=step;
  checkMax();
}

function reset() {
count = init;
checkMax();
}

function checkMax() {
  document.getElementById('count').textContent = 'Count: ' + count;
  if (count === max || count === -max) {
    document.getElementById('message').textContent = message;
  } else {
    document.getElementById('message').textContent = '';
  }
}

export default Counter;
