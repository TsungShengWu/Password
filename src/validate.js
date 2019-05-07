// 
var validateFuncs = [
  _removeSpace,
  _AddLowerLetter,
  _AddUpperLetter,
  _AddNumber,
  _resize
]

// functions
function _removeSpace(inputString){
  return inputString.trim();
}

function _AddLowerLetter(inputString, numChar = 3){
  for(let i = 0; i < numChar; i++){
    inputString += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  return inputString;
}

function _AddUpperLetter(inputString, numChar = 3){
  for(let i = 0; i < numChar; i++){
    inputString += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  return inputString;
}

function _AddNumber(inputString, num = 3){
  for(let i = 0; i < num; i++){
    inputString += Math.floor(Math.random() * 10);
  }
  return inputString;
}

function _resize(inputString, minSize = 9, maxSize = 50){
  if(minSize >= 0 && maxSize >= minSize)
  {
    while(inputString.length < minSize)
    {
      inputString += Math.random().toString(36).substr(2, minSize - inputString.length)
    }
    if(inputString.length > maxSize)
    {
      inputString = inputString.substr(inputString.length - maxSize, inputString.length - 1);
    }
  }
  return inputString;
}

export default validateFuncs;
