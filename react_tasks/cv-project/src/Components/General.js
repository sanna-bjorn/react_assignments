import React, { useState } from 'react';

function SavedText(props) {
  const { firstName, lastName, email, phone, handleClick } = props;
  return (
    <div className='section'>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <button className='formBtn generalBtn' onClick={handleClick}>
        Edit
      </button>
    </div>
  );
}
class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return { editMode: !prevState.editMode };
    });
  }

  render() {
    const { editMode, firstName, lastName, email, phone } = this.state;

    if (!editMode) {
      return (
        <SavedText
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          handleClick={this.handleSubmit}
        />
      );
    }

    return (
      <section className='generalSection'>
        <form className='section' action='' onSubmit={this.handleSubmit}>
          <label>
            First Name
            <input
              type='text'
              placeholder='First Name'
              name='firstName'
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
  }
}
export default General;
