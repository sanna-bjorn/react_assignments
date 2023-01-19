import React, { useState } from 'react';
// import { NoPrint, Print } from 'react-easy-print';
import TextSection from './TextSection';

function SavedText(props) {
  const { schoolName, study, from, to, handleEdit } = props;
  return (
    <div className='section'>
      <p>School Name: {schoolName}</p>
      <p>Study: {study}</p>
      <p>From: {from}</p>
      <p>To: {to}</p>

      <button className='formBtn generalBtn' onClick={handleEdit}>
        Edit
      </button>
    </div>
  );
}
class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      schoolName: '',
      study: '',
      from: '',
      to: '',
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
    const { editMode, schoolName, study, from, to } = this.state;
    const { id, handleDelete } = this.props;
    if (!editMode) {
      return (
        <SavedText
          schoolName={schoolName}
          study={study}
          from={from}
          to={to}
          handleEdit={this.handleSubmit}
        />
      );
    }
    return (
      <section>
        <form className='section' action='' onSubmit={this.handleSubmit}>
          <label htmlFor='schoolName'>
            <p>School Name:</p>
            <input
              type='text'
              placeholder='School Name'
              name='schoolName'
              id='schoolName'
              onChange={this.handleChange}
              value={schoolName}
              required
            />
          </label>
          <label>
            <p>Title of Study:</p>
            <input
              type='text'
              placeholder='Title of study'
              name='study'
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
  }
}
export default Education;
