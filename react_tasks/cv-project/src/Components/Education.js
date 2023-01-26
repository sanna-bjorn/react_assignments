import React, { useState } from 'react';
import TextSection from './TextSection';

const Education = (props) => {
  const [educationInfo, setEducationInfo] = useState({
    schoolName: '',
    study: '',
    from: '',
    to: '',
  });

  const [editMode, setEditMode] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationInfo((prevInfo) => {
      return { ...prevInfo, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode((prevMode) => !prevMode);
  };

  const { schoolName, study, from, to } = educationInfo;

  const { id, handleDelete } = props;
  if (!editMode) {
    return (
      <TextSection
        schoolName={schoolName}
        study={study}
        from={from}
        to={to}
        handleEdit={handleSubmit}
      />
    );
  }

  return (
    <section>
      <form className='section' action='' onSubmit={handleSubmit}>
        <label htmlFor='schoolName'>
          <p>School:</p>
          <input
            type='text'
            placeholder='School Name'
            name='schoolName'
            id='schoolName'
            onChange={handleChange}
            value={schoolName}
            required
          />
        </label>
        <label>
          <p>Degree:</p>
          <input
            type='text'
            placeholder='Degree'
            name='study'
            onChange={handleChange}
            value={study}
            required
          />
        </label>
        <label>
          <p>From:</p>
          <input
            type='date'
            name='from'
            placeholder='From'
            onChange={handleChange}
            value={from}
            required
          />
        </label>

        <label>
          <p>To:</p>
          <input
            type='date'
            name='to'
            placeholder='To'
            onChange={handleChange}
            value={to}
            required
          />
        </label>
        <button className='formBtn'>Save</button>
        <button
          className='formBtn'
          type='button'
          onClick={() => handleDelete('educationIds', id)}
        >
          Delete
        </button>
      </form>
    </section>
  );
};

export default Education;
