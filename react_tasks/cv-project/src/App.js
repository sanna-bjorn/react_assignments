import React, { useState } from 'react';
import uniqid from 'uniqid';
import './Styles/styles.css';
import './Styles/forms.css';
import General from './Components/General';
import Education from './Components/Education';
import Experience from './Components/Experience';

const App = (props) => {
  const [educationIds, setEducationIds] = useState([]);
  const [experienceIds, setExperienceIds] = useState([]);

  const handleClick = (type) => {
    if (type === 'experienceIds') {
      setExperienceIds((prevExpIds) => [...prevExpIds, uniqid()]);
    } else {
      setEducationIds((prevEduIds) => [...prevEduIds, uniqid()]);
    }
  };

  const handleDelete = (type, id) => {
    if (type === 'experienceIds') {
      setExperienceIds((prevExpIds) => {
        let NewList = prevExpIds.filter((key) => key !== id);
        return NewList;
      });
    } else {
      setEducationIds((prevEduIds) => {
        let NewList = prevEduIds.filter((key) => key !== id);
        return NewList;
      });
    }
  };

  const eduComponents = educationIds.map((id) => (
    <Education key={id} id={id} handleDelete={handleDelete} />
  ));
  const expComponents = experienceIds.map((id) => (
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
