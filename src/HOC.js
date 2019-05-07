import React, { Component } from 'react';
import './HOC.css';

// 
const HOC = (WrappedComponent, criteriaArr = [], validateArr = []) => class extends Component{
  constructor(){
    super();
    this.state = {
      criteria: criteriaArr,
      validate: validateArr,
      msg: ''
    }
  }
  
  render(){
    return(
      <div className="HOC">
        <WrappedComponent {...this.props} criteria={this.state.criteria} passEvent={this._generateValidInput.bind(this)} />
        <p>{this.state.msg}</p>
      </div>
    );
  }
  
  _generateValidInput(event){
    var inputString = event.target.value;
    var validString = inputString;
    
    if(validString !== ''){
      for(let i = 0; i < this.state.validate.length; i++) {
        if(this.state.criteria[i].func(validString) === false){
          validString = this.state.validate[i](validString);
        }
      }
    }
    
    if(inputString === validString){
      this.setState ({
        msg: ''
      });
    }
    else{
      this.setState ({
        msg: this.props.validationMsg + validString
      });
    }
    
    //console.log('generate');
  }
};

export default HOC;