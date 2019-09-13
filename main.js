
// TASK 1


function chessBoardRun(n) {
    let input = document.form1.elements;
    let result = chessboard(input[0].value, input[1].value, input[2].value);
    if (!result.status) {
        successHandler(result, n);
    } else {
        errorHandler(result.reason, result, n);

    }
}


// TASK 2
function runEnvelopes(n) {
    let input = document.form2.elements;//get inputs

    let env1 = 
        [input[0].value,
            input[1].value]
    
console.log();
    let env2 = 
      [   input[2].value,
        input[3].value
    ]
console.log(env1, env2);
    let result = envelope(env1, env2);

    if (!result.status) {
        successHandler(result, n);
    } else {
        errorHandler(result.reason, n);
    }
}





//success handling function
function successHandler(text, n) {
    document.querySelectorAll(".result")[n].innerHTML = ` ${text} `;
    console.log(` ${text} `);
}

//error handling function
function errorHandler(err, result, n) {
    console.log(err);
    console.log(result);
    let msg = "";

    switch (err) {
        case "invalid":
            msg = "Incorrect value ";
            break;
       
        default:
            msg = "Incorrect value ";
    }


    document.querySelectorAll(".result")[n].innerHTML = msg;
    document.querySelectorAll(".result")[n].style = "color:  rgba(245, 25, 25, 0.616);";
    setTimeout(() => {
        document.querySelectorAll(".result")[n].innerHTML = "";
    }, 4000)
}