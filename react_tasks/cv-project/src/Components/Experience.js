import React, { useState } from 'react';
// import { NoPrint, Print } from 'react-easy-print';
import TextSection from './TextSection';

const Experience = () => {
  const [experienceInfo, setexperienceInfo] = useState({
    company: '',
    title: '',
    started: '',
    finished: '',
    main_tasks: '',
  });

  const [editMode, setEditMode] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setexperienceInfo((prevInfo) => {
      return { ...prevInfo, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode((prevMode) => !prevMode);
  };

  const { company, title, started, finished, main_tasks } = experienceInfo;

  if (!editMode) {
    return (
      <TextSection
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        handleEdit={handleSubmit}
      />
    );
  }

  return (
    // <NoPrint>
    //   <Print printOnly>
    //     <p className='warning'>Fill in the form.</p>
    //   </Print>
    <section className='experienceSection'>
      <form className='section' action='' onSubmit={handleSubmit}>
        <label>
          <p>Company:</p>
          <input
            type='text'
            placeholder='Company'
            name='company'
            onChange={handleChange}
            value={company}
            required
          />
        </label>

        <label>
          <p>Title:</p>
          <input
            type='text'
            placeholder='Title'
            name='title'
            onChange={handleChange}
            value={title}
            required
          />
        </label>

        <label>
          <p>Started:</p>
          <input
            type='date'
            placeholder='1.1.2022'
            name='started'
            onChange={handleChange}
            value={started}
            required
          />
        </label>
        <label>
          <p>Finished:</p>
          <input
            type='date'
            placeholder='1.1.2022'
            name='finished'
            onChange={handleChange}
            value={finished}
            required
          />
        </label>

        <label>
          <p>Main tasks:</p>
          <input
            type='text'
            placeholder='Main tasks'
            name='main_tasks'
            onChange={handleChange}
            value={main_tasks}
            required
          />
        </label>

        <button className='formBtn generalBtn' type='submit'>
          Save
        </button>
      </form>
    </section>
    // </NoPrint>
  );
};

export default Experience;
