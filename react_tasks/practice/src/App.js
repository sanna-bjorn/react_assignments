import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ReactDOM } from 'react';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;

// Component
class ExampleClass extends React.Component {
  render() {
    return (
      <div>
        {/* using default prop - title */}
        <h1>This is {this.props.title}'s Website!</h1>
      </div>
    );
  }
}

// Creating default props for
// ExampleClass Component
ExampleClass.defaultProps = {
  title: 'GeeksforGeeks',
};

ReactDOM.render(<ExampleClass />, document.getElementById('root'));
