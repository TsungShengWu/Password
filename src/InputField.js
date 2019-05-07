import React, { Component } from 'react';
import './InputField.css';
import PropTypes from 'prop-types';

class InputField extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: this.props.value,
      highlight: false,
      errorMsg: <br />
    }
  }
  
  render() {
    return (
      <div className="InputField">
        <div className={this.state.highlight ? "InputField-Highlight": ""}>
          <h3>{this.props.headerName}</h3>
          <input type="text" defaultValue={this.state.inputValue} onInput={this._handleInput.bind(this)} />
          <p>{this.state.errorMsg}</p>
        </div>
      </div>
    );
  }
  
  _handleInput(event){
    const inputString = event.target.value;
    
    this.props.passEvent && this.props.passEvent(event);
    
    if (inputString !== ''){
      for (let i = 0; i < this.props.criteria.length; i++){
        if (this.props.criteria[i].func(inputString) === false){
          this.setState({
            inputValue: inputString,
            highlight: true,
            errorMsg: this.props.criteria[i].errorMsg
          });
          return;
        }
      }
    }
    
    this.setState({
      inputValue: inputString,
      highlight: false,
      errorMsg: <br />
    });
    return;
  }
}

// --- Prop Setting ---
InputField.defaultProps = {
  headerName: 'Default Input',
  value: '',
  criteria: []
};

InputField.propTypes = {
  headerName: PropTypes.string,
  value: PropTypes.string,
  criteria: PropTypes.array
};

export default InputField;
