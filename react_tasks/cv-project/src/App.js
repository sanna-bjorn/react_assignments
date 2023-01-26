import React, { useState } from 'react';
import uniqid from 'uniqid';
import './Styles/styles.css';
import './Styles/forms.css';
import General from './Components/General';
import Education from './Components/Education';
import Experience from './Components/Experience';

const App = (props) => {
  const [state, setState] = useState({ educationIds: [], experienceIds: [] });

  const handleClick = (type) => {
    setState((prevState) => {
      return {
        [type]: [...prevState[type], uniqid()],
      };
    });
  };
  const handleDelete = (type, id) => {
    setState((prevState) => {
      let newList = prevState[type].filter((key) => key !== id);
      return {
        [type]: newList,
      };
    });
  };
  const eduComponents = state.educationIds.map((id) => (
    <Education key={id} id={id} handleDelete={handleDelete} />
  ));
  const expComponents = this.state.experienceIds.map((id) => (
    <Experience key={id} id={id} handleDelete={handleDelete} />
  ));

  return (
    <div>
      <header>
        <h1 className='title'>CV-App with React</h1>
      </header>
      <main>
        <h2 className='subTitle'>General Information</h2>
        <General />
        <div>
          <h2 className='subTitle'>Educational Experience</h2>
          {eduComponents}
          <button
            className='addBtn'
            onClick={() => handleClick('educationIds')}
          >
            Add
          </button>
        </div>
        <div>
          <h2 className='subTitle'>Experience Section</h2>
          {expComponents}
          <button
            className='addBtn'
            onClick={() => handleClick('experienceIds')}
          >
            Add
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
