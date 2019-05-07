// 
var passwordCriteria=[
  {
    func: _noSpace,
    errorMsg: 'Password can not start or end with a space.'
  },
  {
    func: _hasLowerLetter,
    errorMsg: 'Password must include a lower case letter.'
  },
  {
    func: _hasUpperLetter,
    errorMsg: 'Password must include a upper case letter.'
  },
  {
    func: _hasNumber,
    errorMsg: 'Password must include a number.'
  },
  {
    func: _validLength,
    errorMsg: 'Password must be 9-50 characters long.'
  }
];

// Return true if passing the test.
function _noSpace(inputString){
  return inputString.charAt(0) !== ' ' && inputString.charAt(inputString.length - 1) !== ' ';
}
  
function _hasLowerLetter(inputString){
  return inputString.toUpperCase() !== inputString;
}
  
function _hasUpperLetter(inputString){
  return inputString.toLowerCase() !== inputString;
}
  
function _hasNumber(inputString){
  return /\d/.test(inputString);
}
  
function _validLength(inputString){
  return inputString.length > 8 && inputString.length < 51;
}

export default passwordCriteria;
