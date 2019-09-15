function envelope(env1, env2) {
    let a = parseFloat(env1[0])
    let b = parseFloat(env1[1])
    let c = parseFloat(env2[0])
    let d = parseFloat(env2[1])

    let result
    if (!checkValidEnv(env1, env2)) {
        switch (true) {
            case a === c && b === d:
                result = `These envelopes are the same size`
                break;
            case a === c || b === d:
                result = `These envelopes have a same size side`
                break;
            case a === d && b === c:
                result = `These envelopes are the same size`
                break;
            case a < c && b < d:
                result = `The first envelope will fit in the second`
                break;
            case a > c && b > d:
                result = `The second envelope will fit in the first`
                break;
            default:
                result = diagonal(a, b, c, d);
        }
    } else {
        result = checkValidEnv(env1, env2)
        return result
    }

    return result

}
function diagonal(a, b, c, d, ) {
    let result
    if (a < c && b > d) {
        let sumSq = c * c + d * d;
        let p = Math.sqrt(sumSq - b * b);
        let q = Math.sqrt(sumSq - a * a);
        let check = (a * b - p * q >= c * d * 2)
        if (check === true) {
            result = `The second envelope will fit in the first diagonally`
        } else result = `These envelopes don't fit on top of each other.`
        return result
    }
    else if (a > c && b < d) {
        let sumSq = a * a + b * b;
        let p = Math.sqrt(sumSq - d * d);
        let q = Math.sqrt(sumSq - c * c);
        let check = (c * d - p * q >= a * b * 2)
        if (check === true) {
            result = `The first envelope will fit in the second diagonally.`
        } else result = `These envelopes don't fit on top of each other.`
        return result
    }
    return result
}



function checkValidEnv(env1, env2) {

    let message = ""
    if (env2[0].length === 0 &&
        env2[1].length === 0 &&
        env1[0].length === 0 &&
        env1[1].length === 0) {
        message = {
            status: 'Failed',
            reason: 'All fields are empty',
        };
    }
    else if (env1[0].length === 0 && env1[1].length === 0) {
        message = {
            status: 'Failed',
            reason: 'Envelope 1 fields are empty',
        };
    }
    else if (env2[0].length === 0 && env2[1].length === 0) {
        message = {
            status: 'Failed',
            reason: 'Envelope 2 fields are empty',
        };
    }
    else if (env2[0].length === 0 ||
        env2[1].length === 0 ||
        env1[0].length === 0 ||
        env1[1].length === 0) {
        message = {
            status: 'Failed',
            reason: 'There is at least one empty field.',
        };
    }
    else if (!Number(env2[0]) ||
        !Number(env2[1]) ||
        !Number(env1[0]) ||
        !Number(env1[1])) {
        message = {
            status: 'Failed',
            reason: 'Incorrectly entered height and / or width. It must be a number',
        };
        return message;
    }
    else if (parseFloat(env2[0]) <= 0 ||
        parseFloat(env2[1]) <= 0 ||
        parseFloat(env1[0]) <= 0 ||
        parseFloat(env1[1] <= 0)) {
        message = {
            status: 'Failed',
            reason: 'Height and width should be more than 0',
        };
        return message;
    }
    else if (parseFloat(env2[0]) === 0 ||
        parseFloat(env2[1]) === 0 ||
        parseFloat(env1[0]) === 0 ||
        parseFloat(env1[1] === 0)) {
        message = {
            status: 'Failed',
            reason: 'Height and width should be more than 0',
        };
        return message;
    }
    else if (Number(env2[0]) > 50 ||
        Number(env2[1]) > 50 ||
        Number(env1[0]) > 50 ||
        Number(env1[1] > 50)) {
        message = {
            status: 'Failed',
            reason: 'Height and width should be up to 50',
        };
        return message;
    }


    return message

}

