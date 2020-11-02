// A note on alternate solutions:
// You can test them by switching the names of the alternate solution function
// with the standard solution.


// Your code below.



const isValidPassword = function(password) {
  if (password.length < 12) {
    return false;
  }

  for (const char of password) {
    if (char === ' ' || char === '.') {
      return false;
    }
  }

  return true;
}

// using a compound boolean with ifs and .includes
const isValidPasswordAlt1 = function(password) {
  if (password.includes('.') || password.includes(' ') || password.length < 12) {
    return false;
  }

  return true;
}

// using a raw compound boolean and .includes
const isValidPasswordAlt2 = function(password) {
  return !password.includes('.') && !password.includes(' ') && password.length >= 12;
}

// using helper function
const isItC = function(grade) {
  return grade >= 70 && grade <= 79;
}

const onlyCs = function(grades) {
  return grades.filter(isItC);
}

// using anonymous inline function instead of helper
const onlyCsAlt = function(grades) {
  return grades.filter(function(grade) {
    return grade >= 70 && grade <= 79;
  })
}

// manual looping version
const countBs = function(grades) {
  let count = 0;
  for (const grade of grades) {
    if (grade >= 80 && grade <= 89) {
      count++;
    }
  }

  return count;
}

// filter and .length version
const countBsAlt1 = function(grades) {
  const Bs = grades.filter(function(grade) {
    return grade >= 80 && grade <= 89;
  })

  return Bs.length;
}

// more succinct version of above
const countBsAlt2 = function(grades) {
  return grades.filter(function(grade) {
    return grade >= 80 && grade <= 89;
  }).length;
}

// reduce version
const countBsAlt3 = function(grades) {
  return grades.reduce(function(count, grade) {
    if (grade >= 80 && grade <= 89) {
      return count + 1;
    }

    return count;
  }, 0);
}

// reduce and ternary version
const countBsAlt4 = function(grades) {
  return grades.reduce(function(count, grade) {
    return grade >= 80 && grade <= 89 ? count + 1 : count;
  }, 0);
}

  // looping backwards version
const lastIndexOfPunctuation = function(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    if (char === '.' || char === '?' || char === '!') {
      return i;
    }
  }

  // we made it through the whole string without encountering a space and returning the index (which would've ended this function)
  return -1;
}

// looping forwards version, updating index as we go:
const lastIndexOfPunctuationAlt1 = function(str) {
  // default to -1 in case we don't find one
  let lastIndex = -1;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '.' || char === '?' || char === '!') {
      lastIndex = i;
    }
  }

  return lastIndex;
}

// .lastIndexOf version
const lastIndexOfPunctuationAlt2 = function(str) {
  const lastPeriod = str.lastIndexOf('.');
  const lastQuestionMark = str.lastIndexOf('?');
  const lastExclamationMark = str.lastIndexOf('!');
  let index = lastPeriod;
  if (lastQuestionMark > index) {
    index = lastQuestionMark;
  }

  if (lastExclamationMark > index) {
    index = lastExclamationMark;
  }

  return index;
}

// .lastIndexOf and Math.max version
const lastIndexOfPunctuationAlt3 = function(str) {
  const lastPeriod = str.lastIndexOf('.');
  const lastQuestionMark = str.lastIndexOf('?');
  const lastExclamationMark = str.lastIndexOf('!');

  return Math.max(lastPeriod, lastQuestionMark, lastExclamationMark);
}

// string building version with very long boolean
const deleteMiddleLetters = function(str) {
  let result = '';
  const middle = Math.floor(str.length / 2);
  for (let i = 0; i < str.length; i++) {
    if (str.length % 2 === 1 && i !== middle || str.length % 2 === 0 && i !== middle && i !== middle - 1) {
      result = result + str[i];
    }
  }

  return result;
}

// else-if string-building version
// not necessary, but possibly easier to follow than the very long boolean
const deleteMiddleLettersAlt1 = function(str) {
  let result = '';
  const middle = Math.floor(str.length / 2);
  for (let i = 0; i < str.length; i++) {
    if (str.length % 2 === 1 && i !== middle) {
      result = result + str[i];
    } else if (str.length % 2 === 0 && i !== middle && i !== middle - 1) {
      result = result + str[i];
    }
  }

  return result;
}

// nested-if string-building version
// probably not... good
// but another way to logic it!
const deleteMiddleLettersAlt2 = function(str) {
  let result = '';
  const middle = Math.floor(str.length / 2);
  for (let i = 0; i < str.length; i++) {
    if (str.length % 2 === 1) {
      if(i !== middle) {
        result = result + str[i];
      }
    } else if (i !== middle && i !== middle - 1) {
        result = result + str[i];
    }
  }

  return result;
}


// using .slice
const deleteMiddleLettersAlt3 = function(str) {
  const middle = Math.floor(str.length / 2);
  if (str.length % 2 === 1) {
  
    return str.slice(0, middle) + str.slice(middle + 1);
  }
  
  return str.slice(0, middle - 1) + str.slice(middle + 1);
}

// convert to array and filter version using an array and two variables to check if we're at the middle.
// The -1 for middleIndex2 if the string has an odd number of characters is in order to pick an index that our current `i` can't be, since we only have one middle index with odd character counts.
const deleteMiddleLettersAlt4 = function(str) {
  const middleIndex1 = str.length % 2 === 0 ? str.length / 2 - 1 : Math.floor(str.length / 2);
  const middleIndex2 = str.length % 2 === 0 ? str.length / 2 : -1;
  const middleLettersGoneArr = str.split('').filter(function(char, i) {
    return i !== middleIndex1 && i !== middleIndex2;
  });

  return middleLettersGoneArr.join('')
}

// convert to array and filter version using an array and includes to check indices
// The one-element array if the string has an odd number of characters is, again, since we only have one middle index with odd character counts.
const deleteMiddleLettersAlt5 = function(str) {
  const middleIndices = str.length % 2 === 0 ? [str.length / 2 - 1, str.length / 2] : [Math.floor(str.length / 2)];
  const middleLettersGoneArr = str.split('').filter(function(char, i) {
    return middleIndices.includes(i) === false;
  });

  return middleLettersGoneArr.join('')
}

// Using a manual loop.
const getCenturies = function(years) {
  const centuryStrings = [];
  for (const year of years) {
    const centuryNumber = year + 100;
    let suffix = 'th';
    if (centuryNumber >= 300 && centuryNumber < 400) {
      suffix = 'rd';
    } else if (centuryNumber >= 200 && centuryNumber < 300) {
      suffix = 'nd';
    } else if (centuryNumber >= 100 && centuryNumber < 200 || centuryNumber >= 2100) {
      suffix = 'st';
    }

    const centuryString = centuryNumber.toString().slice(0, -2) + suffix;
    centuryStrings.push(centuryString);
  }

  return centuryStrings;
}

// Using .map.
const getCenturiesAlt1 = function(years) {
  return years.map(function(year) {
    const centuryNumber = year + 100;
    let suffix = 'th';
    if (centuryNumber >= 300 && centuryNumber < 400) {
      suffix = 'rd';
    } else if (centuryNumber >= 200 && centuryNumber < 300) {
      suffix = 'nd';
    } else if (centuryNumber >= 100 && centuryNumber < 200 || centuryNumber >= 2100) {
      suffix = 'st';
    }

    return centuryNumber.toString().slice(0, -2) + suffix;
  })
}

// using .map and switch
const getCenturiesAlt2 = function(years) {
  return years.map(function(year) {
    const centuryNumber = (year + 100).toString().slice(0, -2);
    let suffix = 'th';
    switch(centuryNumber) {
      case '2':
        suffix = 'nd';
        break;
      case '3':
        suffix = 'rd';
        break;
      case '1':
      case '21':
        suffix = 'st';
        break;
    }

    return centuryNumber + suffix;
  })
}





// Our code below. Don't touch!


if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof onlyCs === 'undefined') {
  onlyCs = undefined;
}

if (typeof countBs === 'undefined') {
  countBs = undefined;
}

if (typeof lastIndexOfPunctuation === 'undefined') {
  lastIndexOfPunctuation = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof getCenturies === 'undefined') {
  getCenturies = undefined;
}



module.exports = {
  isValidPassword,
  onlyCs,
  countBs,
  lastIndexOfPunctuation,
  deleteMiddleLetters,
  getCenturies,
}
