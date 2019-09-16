function fibonacci(context) {
    let max = Number(context.max)
    let min = Number(context.min)
    let length = Number(context.length)
    if (!checkValidFib(context)) {
        fibNumber = 0;
        if (length > 0) {
            let fibonacci = [0, 1];
            for (let i = 2; i < length; i++) {
                fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
                
            }
            let info = ""
            for (let i = 0; i < fibonacci.length; i++) {
                info += `${i + 1}. ${fibonacci[i]} <br>`
            }
            let result = `Your result of fibonacci numbers for length ${length}: <br>   ${info} `
            console.log(result);
            return result;
        } else {
            let arr = []
            for (let i = 0; fibNumber < max; ++i) {

                fibNumber = FibBine(i);
                if (fibNumber > max) break;
                fibNumber >= min ? arr.push(fibNumber) : 0;
            }
            let info = ""
            for (let i = 0; i < arr.length; i++) {
                info += ` ${arr
                [i]}, `
            }
            let result = `Your result of fibonacci numbers in the range from ${min} and to ${max}: ${info} `
           
            console.log(result);
            return result
        }

    }
    else {
        result = checkValidFib(context);
        console.log(result);
        return result;
    }
   
}
function FibBine(n) {  //  Bine 
    let sq5 = Math.sqrt(5);
    let first = (1 + sq5) / 2;
    let second = (1 - sq5) / 2;
    let res = Math.round((Math.pow(first, n) - Math.pow(second, n)) / sq5);
    return res
}
let obj = { min: 2, max: 15 }
fibonacci(obj);


function checkValidFib(info) {
    let reg = /[0-9]/g
    let message = ""
    let length = info.length;
    let max = info.max;
    let min = info.min;
    if (length) {
        if (length < 0) {
            message = {
                status: 'Failed',
                reason: 'Passed numbers smaller then 0',
            };
            return message
        } if ((length.match(/^[0-9]+$/) != null) == false) {
            message = {
                status: 'Failed',
                reason: 'Incorrectly entered length It must be number ',
            };
            return message
        } if (length > 100) {
            message = {
                status: 'Failed',
                reason: 'Passed numbers more then 100',
            };
            return message
        }
         if (length === "0") {
            message = {
                status: 'Failed',
                reason: 'Passed numbers cant be 0',
            };
            return message
        }
        return message
    }
    if (max > 0 && min > 0 && !length == true) {

        if (min > max) {
            message = {
                status: 'Failed',
                reason: 'The maximum value must be greater than the minimum',
            }
            return message
        }
        return message
    }
    if (min.match(/^[0-9]+$/) !== null === false) {
        message = {
            status: 'Failed',
            reason: 'Incorrectly entered minimum It must be number ',
        };
        return message
    }
     if (max.match(/^[0-9]+$/) !== null === false) {
        message = {
            status: 'Failed',
            reason: 'Incorrectly entered maximum It must be number ',
        };
        return message
    }
    if (min > max) {
        message = {
            status: 'Failed',
            reason: 'The maximum value must be greater than the minimum',
        }
        return message
    }
    return message
}

