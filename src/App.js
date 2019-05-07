import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import InputField from './InputField.js';
import HOC from './HOC.js'
import passwordCriteria from './pwdCriteria.js';
import validateFuncs from './validate.js';


class App extends Component {
  render(){
    return(
      <div className="App">
        <h1>Login</h1>
        <hr />
        <InputField headerName="Username" />
        <ValidInputField headerName="Password" validationMsg="Suggested Password: " />
        <button>Continue</button>
        <br /><br />
        <hr />
        <div className="Criteria">
          <h2>Password Criteria</h2>
          <ul>
            <li>Password can not start or end with a space</li>
            <li>Include a lower case letter</li>
            <li>Include an upper case letter</li>
            <li>Include a number</li>
            <li>Be 9-50 characters long</li>
          </ul>
        </div>
      </div>
    );
  }
}

// --- Prop Setting ---
App.defaultProps = {
  headerName: 'Default App',
};

App.propTypes = {
  headerName: PropTypes.string,
};


// Create HOC.
const ValidInputField = HOC(InputField, passwordCriteria, validateFuncs);

ValidInputField.defaultProps = {
  validationMsg: ''
}

ValidInputField.propTypes = {
  validationMsg: PropTypes.string
}


export default App;
