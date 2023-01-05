import React, { Component } from 'react';
import uniqid from 'uniqid';
import Overview from './components/Overview';

/*initialaise constructor*/
class App extends Component {
  constructor() {
    super();
    /*define state: assign task to an object, and define task.text to be empty string. define tasks to be empty array to start with */
    this.state = {
      task: { text: '', id: uniqid() },
      tasks: [],
    };
  }
  /*onChange handler for input field, changes current state to whatever we type in input */
  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };
  /* onSubmit handler for the form element, invokes when submit is clicked. Prevent form from refreshing every time it's submitted by e.preventDefault.  */
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      /*add the task from input field to tasks array */
      tasks: this.state.tasks.concat(this.state.task),
      /*set task.text to empty string again */
      task: { text: '', id: uniqid() },
    });
  };

  render() {
    /*destructure state for cleaner code*/
    const { task, tasks } = this.state;

    return (
      <div>
        {/* adding onSubmitTask funtion to the form */}
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor='taskInput'>Enter task</label>
          {/* connect onChange handler to forn input element  */}
          <input
            onChange={this.handleChange}
            value={task.text}
            type='text'
            id='taskInput'
          />
          <button type='submit'>Add Task</button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}
export default App;
