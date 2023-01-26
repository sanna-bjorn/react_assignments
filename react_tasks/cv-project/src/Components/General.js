import React, { useState } from 'react';
import TextSection from './TextSection';

const General = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [editMode, setEditMode] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => {
      let newInfo = { ...prevInfo, [name]: value };
      return newInfo;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode((prevMode) => !prevMode);
  };

  const { firstName, lastName, email, phone } = personalInfo;

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
    <section className='generalSection'>
      <form className='section' action='' onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            onChange={handleChange}
            value={firstName}
            required
          />
        </label>

        <label>
          Last Name
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            onChange={handleChange}
            value={lastName}
            required
          />
        </label>

        <label>
          Email
          <input
            type='email'
            placeholder='example@gmail.com'
            name='email'
            onChange={handleChange}
            value={email}
            required
          />
        </label>
        <label>
          Phone Number
          <input
            type='tel'
            name='phone'
            placeholder='123-456-7890'
            onChange={handleChange}
            value={phone}
            required
          />
        </label>
        <button className='formBtn generalBtn' type='submit'>
          Save
        </button>
      </form>
    </section>
  );
};

export default General;
