import React, { Component } from 'react';
import styles from '../src/Styles/styles.css';

class App extends Component {
  constructor() {
    super();
    /*define state: create a task object, and define task.text to be empty string. define tasks to be empty array to start with */
    this.state = {
      task: { text: '' },
      tasks: [],
    };
  }
  render() {
    /*destructure state for cleaner code*/
    const { task, tasks } = this.state;

    return (
      <div>
        {/* adding onSubmitTask funtion to the form */}
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor='generalInput'>General info</label>
          {/* connect onChange handler to forn input element  */}
          <input
            onChange={this.handleChange}
            value={task.text}
            type='text'
            id='taskInput'
          />
          <input
            onChange={this.handleChange}
            value={task.text}
            type='text'
            id='taskInput'
          />
          <button type='submit'>Submit general info</button>
        </form>
        {/* <Overview tasks={tasks} /> */}
      </div>
    );
  }
}

export default App;
