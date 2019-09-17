
function checkValidBoard(l, w, s) {
  let message = '';
  let regNum = /[a-zA-Z 1-9]/g;
  if (l.length === 0 && w.length === 0 && s.length === 0) {
    message = {
      status: 'Failed',
      reason: 'All fields are empty',
    };
    return message;
  }
  else if (!Number(l) || !Number(w)) {
    message = {
      status: 'Failed',
      reason: 'Incorrectly entered length and / or width. It must be a number',
    };
    return message;
  }
  else if (l.length == 0 || w.length == 0) {
    message = {
      status: 'Failed',
      reason: 'An empty field of length or width.',
    };
    return message;
  }
  else if (!s) {
    message = {
      status: 'Failed',
      reason: 'Empty field with symbol',
    };
    return message;
  }
  else if (typeof s !== 'string') {
    message = {
      status: 'Failed',
      reason: 'Symbol should be a string',
    };
    return message;
  }
  else if (regNum.test(s) === true) {
    message = {
      status: 'Failed',
      reason: 'A symbol cannot be a letter or a number',
    };
    return message;
  }
  else if (Number(l) <= 0 || Number(w) <= 0) {
    message = {
      status: 'Failed',
      reason: 'Length and width should be more than 0',
    };
    return message;
  }
  else if (Number(l) < 0 || Number(w) < 0) {
    message = {
      status: 'Failed',
      reason: 'Length and width should be more than 0',
    };
    return message;
  }
  else if (Number(l) > 50 || Number(w) > 50) {
    message = {
      status: 'Failed',
      reason: 'Length and width should be up to 50',
    };
    return message;
  }

  return message

}


export{ checkValidBoard};