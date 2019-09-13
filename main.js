
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
    //run the main function
    let result = envelope(env1, env2);

    if (!result.status) {
        successHandler(result, n);
    } else {
        errorHandler(result.reason, n);
    }
}


// TASK 3
function areaOfTriangle(n) {
    let arrayOfTriangles = [];
    let triangles = document.querySelectorAll(".triangle");// get all the triangles

    for (let i = 0; i < triangles.length; i++) {
        let sidesOfTriangle = triangles[i].querySelectorAll("input");

        let triangle = {
            vertices: `ABC${i + 1}`,
            a: sidesOfTriangle[0].value,
            b: sidesOfTriangle[1].value,
            c: sidesOfTriangle[2].value,
        };

        arrayOfTriangles.push(triangle);
    }

    //run the main function with arrayOfTriangles as argument
    let result = areaOfTriangle(arrayOfTriangles);

    if (!result.status) {
        successHandler(result, n);
    } else {
        errorHandler(result.reason, n);
    }
}
let count = 0;
// add one more triangle
function addTriangle() {
    let len = document.querySelectorAll(".triangle").length; // length collection of triangles
    let triangles = document.getElementById('triangles'); // get div let triangles by id
    let triangle = document.createElement('div'); // create empty triangle

    let btn = document.getElementById('.triangle');



    if (len > 10) {
        btn.disabled = true;

    }

    triangle.className = "triangle";
    triangle.innerHTML = `<span>${len + 1} Triangle: </span>
     <input type="text" class="form-control" placeholder="vertices">
        <input type="text" class="form-control" placeholder="side ">
        <input type="text" class="form-control" placeholder="side ">
        <input type="text" class="form-control" placeholder="side ">
        <button type="button" class="btn btn-danger  btn-bottom  mb-2" onclick="delTriangle()"> -</button>  `;

    triangles.appendChild(triangle);
}

// remove lest triangle
function delTriangle() {
    let triangles = document.querySelectorAll(".triangle");
    triangles[triangles.length - 1].remove(triangles[triangles.length]); // del last elem of triangle's collection
}


// TASK 4
function runDefinePalindrome(n) {
    let value = document.form4.elements[0].value;//get value

    //run the main function
    let result = definePalindrome(value);

    if (!result.status) {
        successHandler(result, n);
    } else {
        errorHandler(result.reason, n);
    }
}


// TASK 5
function runTickets(n) {
    let v = document.form5.elements;//get inputs

    //run the main function
    let result = tickets(v[0].value, v[1].value);

    if (!result.status) {
        successHandler(result, n);
    } else {
        errorHandler(result.reason, n);
    }
}

// TASK 6
function runNumberSequence(n) {
    let v = document.form6.elements;//get inputs

    //run the main function
    let result = numberSequence(v[0].value, v[1].value);

    if (!result.status) {
        successHandler(result, n);
    } else {
        errorHandler(result.reason, n);
    }
}


// TASK 7
function runRangeFib(n) {
    let v = document.form7.elements;//get inputs

    //run the main function
    let result = rangeFib(v[0].value, v[1].value);

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
        case "Incorrectly entered length and / or width. It must be a number":
            msg = "Incorrectly entered length and / or width. It must be a number ";
            break;
        case "empty":
            msg = "Incorrect value ";
            break;
        case "incorrectSides":
            msg = "Incorrect value ";
            break;
        case "notEnoughSymbol":
            msg = "Incorrect value ";
            break;
        case "minMoreMax":
            msg = "Incorrect value ";
            break;
        case 'Incorrectly entered length and / or width. It must be a number':
            msg = 'Incorrectly entered length and / or width. It must be a number';
            break;
        case 'Not enough arguments':
            msg = 'Not enough arguments';
            break;
        case 'Symbol should be a string':
            msg = 'Symbol should be a string';
            break;
        case 'Length and width should be up to 50':
            msg = 'Length and width should be up to 50';
            break;
        case 'A symbol cannot be a letter or a number':
            msg = 'A symbol cannot be a letter or a number';
            break;
        case 'Length and width should be more than 0':
            msg = 'Length and width should be more than 0';
            break;
        case 'Empty field with symbol':
            msg = 'Empty field with symbol';
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