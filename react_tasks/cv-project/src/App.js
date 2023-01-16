import React, { Component } from 'react';
import uniqid from 'uniqid';
import styles from './Styles/styles.css';
import General from './Components/General';
import Education from './Components/Education';
import Experience from './Components/Experience';

class App extends Component {
  constructor() {
    super();
    this.state = {
      educationIDs: [],
      experienceIDs: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleClick(type) {
    this.setState((prevState) => {
      return {
        [type]: [...prevState[type], uniqid()],
      };
    });
  }
  handleDelete(type, id) {
    this.setState((prevState) => {
      let newList = prevState[type].filter((key) => key !== id);
      return {
        [type]: newList,
      };
    });
  }
  render() {
    const educationComponent = this.state.educationIDs.map((id) => (
      <Education key={id} id={id} handleDelete={this.handleDelete} />
    ));
    const experienceComponent = this.state.experienceIDs.map((id) => (
      <Experience key={id} id={id} handleDelete={this.handleDelete} />
    ));

    return (
      <div className='container'>
        <header>
          <h1 className='title'>CV-App with React</h1>
        </header>
        <main>
          <h2 className='subTitle'>General Information</h2>
          <General />
          <div>
            <h2 className='subTitle'>Educational Experience</h2>
            {educationComponent}
            <button
              className='addBtn'
              onClick={() => this.handleClick('educationIds')}
            >
              Add
            </button>
          </div>
          <div>
            <h2 className='subTitle'>Experience Section</h2>
            {experienceComponent}
            <button
              className='addBtn'
              onClick={() => this.handleClick('experienceIds')}
            >
              Add
            </button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
