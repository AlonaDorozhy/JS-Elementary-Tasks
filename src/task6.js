function Sequence(rowLength, square) {
  
    if (!checkValidSeq(rowLength, square)) {
        const rowNumbers = [];
        let startNumber = Math.sqrt(square);
        for (startNumber; rowNumbers.length < rowLength; startNumber++) {
            rowNumbers.push(startNumber);
        }
        let seq = rowNumbers.join(', ');
        console.log(seq);
        result = `Your result : ${seq}`;
        return result;
    } else {
        result = checkValidSeq(rowLength, square);
        console.log(result);
        return result;
    }

}

function checkValidSeq(rowLength, square) {
    let message = "";
    let len = Number(rowLength);
    let squ = Number(square);

    let reg = /^\d+$/;
    if (len === 0 && squ === 0) {
        message = {
            status: 'Failed',
            reason: 'All fields are empty, value cannot be a zero',
        };
        return message;
    }
    else if (len === 0) {
        message = {
            status: 'Failed',
            reason: 'Length field is empty',
        };
        return message;
    }
    else if (squ === 0) {
        message = {
            status: 'Failed',
            reason: 'Square field is empty',
        };
        return message;
    }
    else if (reg.test(rowLength) === false || reg.test(square) === false) {
        message = {
            status: 'Failed',
            reason: 'Incorrectly entered length and / or square. It must be only a positive number',
        };
        return message;
    }

    else if (len < 0 && squ < 0) {
        message = {
            status: 'Failed',
            reason: 'Passed arguments smaller than 0',
        };
        return message;
    }
    else if (Number.isInteger(Math.sqrt(squ)) == false) {
        message = {
            status: 'Failed',
            reason: 'The passed value in arguments cannot be the square of a number.',
        };
        return message;
    }

    return message;
}






