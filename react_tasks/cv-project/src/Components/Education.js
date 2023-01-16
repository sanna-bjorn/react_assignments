import React, { useState } from 'react';
// import { NoPrint, Print } from 'react-easy-print';

/*take info from props and map over them, display in list element */
const Education = () => {
  const [educationInfo, setEducationInfo] = useState({
    schoolName: '',
    degree: '',
    graduated: '',
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

  const { schoolName, degree, graduated } = educationInfo;

  //   if (!editMode) {
  //     return (
  //       <TextSection
  //         firstName={firstName}
  //         lastName={lastName}
  //         email={email}
  //         phone={phone}
  //         handleEdit={handleSubmit}
  //       />
  //     );
  //   }

  return (
    // <NoPrint>
    //   <Print printOnly>
    //     <p className='warning'>Fill in the form.</p>
    //   </Print>
    <section className='educationSection'>
      <form className='section' action='' onSubmit={handleSubmit}>
        <label>
          <p>School name:</p>
          <input
            type='text'
            placeholder='School name'
            name='schoolName'
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
            name='degree'
            onChange={handleChange}
            value={degree}
            required
          />
        </label>

        <label>
          <p>Graduated:</p>
          <input
            type='number'
            placeholder='2002'
            name='graduated'
            onChange={handleChange}
            value={graduated}
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

export default Education;
