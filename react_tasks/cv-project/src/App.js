import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    /*define state: create a task object, and define task.text to be empty string. define tasks to be empty array to start with */
    this.state = {
      task: { text: '' },
      tasks: [],
    };
  }
}

export default App;
