function envelope(env1, env2) {
    let a = parseFloat(env1[0])
    let b = parseFloat(env1[1])
    let c = parseFloat(env2[0])
    let d = parseFloat(env2[1])
    console.log(a, b, c, d);
    let result
    if (!checkValid(env1, env2)){
    switch (true) {
        case a == c && b == d:
            result = ` These envelopes are the same size `
            break;
        case a < c && b < d:
            result = ` The first envelope will fit in the second`
            break;
        case a > c && b > d:
            result = ` The second envelope will fit in the first`
            break;
        default:
            result = diagonal(a, b, c, d);
    }
    }else{
        let Invalid = checkValid(env1, env2)
        return checkValid(env1, env2)
    }
   
   return result
   
}
function diagonal(a, b, c, d, ) {
    // let a = parseFloat(env1[0])
    // let b = parseFloat(env1[1])
    // let c = parseFloat(env2[0])
    // let d = parseFloat(env2[1])
    if (a < c && b > d) {
        sumSq = c * c + d * d;
        p = Math.sqrt(sumSq - b * b);
        q = Math.sqrt(sumSq - a * a);
        check = (a * b - p * q >= c * d * 2)
        if (check == true) {
            result = ` The second envelope will fit in the first`
        } else result = ` These envelopes don't fit on top of each other.`
        return result
    }
    else if (a > c && b < d) {
        sumSq = a * a + b * b;
        p = Math.sqrt(sumSq - d * d);
        q = Math.sqrt(sumSq - c * c);
        check = (c * d - p * q >= a * b * 2)
        if (check == true) {
            result = ` The first envelope will fit in the second`
        } else result = ` These envelopes don't fit on top of each other.`
        return result
    }
}

envelope( [5, 5], [5.5, 1]  )

function checkValid(env1, env2) {
    let a = parseFloat(env1[0])
    let b = parseFloat(env1[1])
    let c = parseFloat(env2[0])
    let d = parseFloat(env2[1])
    let message =""
    if (typeof a !== 'number' && typeof b !== 'number' && typeof c !== 'number' && typeof d !== 'number'){
        message = {
            status: 'Failed',
            reason: 'Passed data is not a numbers',
        };
    } 
    else if (a <= 0 && b <= 0 || c <= 0 && d <= 0  ){
        message = {
            status: 'Failed',
            reason: 'The argument values are less than 0 or equal to 0.',
        };
    }

    
}








// // // function envelopes(a, b) {
// // //     let checkValid = isValid2(a, b);

// // //     if (!checkValid.status) {
// // //         let aWidth = parseFloat(a.width),
// // //             aHeight = parseFloat(a.height),
// // //             bWidth = parseFloat(b.width),
// // //             bHeight = parseFloat(b.height);

// // //         if (aWidth<bWidth && aHeight<bHeight || aWidth<bHeight && aHeight<bWidth) {
// // //             return 1;
// // //         } else if (aWidth>bWidth && aHeight>bHeight || aWidth>bHeight && aHeight>bWidth) {
// // //             return 2;
// // //         } else {
// // //             return 0;
// // //         }
// // //     } else {
// // //         return checkValid;
// // //     }
// // // }


// // // function isValid2(a, b) {
// // //     if (a.width && b.width && a.height && b.height) {
// // //         let reg = /^([0-9]*[.])?[0-9]+$/;

// // //         if ((reg.test(a.width)) && (reg.test(b.width)) && (reg.test(a.height)) && (reg.test(b.height)) && (parseInt(a.width)) && (parseInt(b.width)) && (parseInt(a.height)) && (parseInt(b.height))) {
// // //             return true;
// // //         } else return {
// // //             status: 'failed',
// // //             reason: 'invalid'
// // //         }
// // //     } else return {
// // //         status: 'failed',
// // //         reason: 'empty'
// // //     }
// // // }