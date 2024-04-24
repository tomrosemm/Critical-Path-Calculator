//function that checks a given string for special characters. 
//returns true if there are
function containsSpecialChars(str) {
    const specialChars =
      /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}

//function that checks name for every row of rowArray. 
//if it is valid it returns true. 
//if it is an invalid name it returns false
function nameValid () {
  for(let i = 0; i < rowArray.length; i++) {
    if(containsSpecialChars(rowArray[i].name)) {
      console.log('Invalid input');
      return false;
    }
    else {
      console.log('Valid input');
    }
  }
return true;
}

//fuction that checks duration for every row of rowArray. 
//if it is a positive interger is is valid and thus returns true. 
//if it is anything else it is invalid and thus returns false
function durationValid () {
  for(let i = 0; i < rowArray.length; i++) {
    if(Number.isInteger(rowArray[i].duration) = false) {
      console.log('Not an integer');
      return false;
    }
    if(rowArray[i].duration < 0) {
      console.log('Negative number')
      return false;
    }
    else {
      console.log('Valid number')
    }
  }
  return true;
}
