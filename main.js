
function chessBoardRun(i) {
    let input = document.form1.elements;
    let result = chessboard(input[0].value, input[1].value, input[2].value);
    if (!result.status) {
        document.getElementById('result1').innerHTML = ` ${result} `;
    } else {
     let err =   showError(result.reason, i)
    }
}

// TASK 2
function runEnvelopes(i) {
    let input = document.form2.elements;
    let env1 = [input[0].value, input[1].value]
    let env2 = [input[2].value, input[3].value]
    let result = envelope(env1, env2);
    if (!result.status) {
        document.getElementById('result2').innerHTML = ` ${result} `;
    } else {
        let err = showError(result.reason, i)
    }
}

//TASK 3
function allTriangles(i) {
    let arrayTriangles = [];
    let getTriangles = document.querySelectorAll(".triangle");
    for (let i = 0; i < getTriangles.length; i++) {
        let sidesOfTriangle = getTriangles[i].querySelectorAll("input");
        arrayTriangles.push({
            vertices: (sidesOfTriangle[0].value).toUpperCase(),
            a: sidesOfTriangle[1].value,
            b: sidesOfTriangle[2].value,
            c: sidesOfTriangle[3].value,
        });
    }
    let result = triangles(arrayTriangles);
    if (!result.status) {
        document.getElementById('result3').innerHTML = ` ${result} `;
    }
    else {
        let err = showError(result.reason, i)
    }
}

function addTriangle() {
    let len = document.querySelectorAll(".triangle").length;
    let triangles = document.getElementById('triangles');
    let triangle = document.createElement('div');
    let btn = document.getElementById('addBtn');
    if (len > 8) { btn.disabled = true; }
    triangle.className = "triangle";
    triangle.innerHTML = `<span>${len + 1} Triangle: </span>
     <input type="text" maxlength="3" class="form-control" placeholder="vertices">
        <input type="text"  class="form-control" placeholder="side ">
        <input type="text" class="form-control" placeholder="side ">
        <input type="text" class="form-control" placeholder="side ">
        <button type="button" class="btn btn-danger  btn-bottom  mb-2" onclick="delTriangle()"> -</button>  `;
    triangles.appendChild(triangle);
}

function delTriangle() {
    let triangles = document.querySelectorAll(".triangle");
    triangles[triangles.length - 1].remove(triangles[triangles.length]);
}

//  TASK 4
function runPalindrome(i) {
    let value = document.form4.elements[0].value;
    let result = Palindrome(value);
    if (!result.status) {
        document.getElementById('result4').innerHTML = ` ${result} `;
    } else {
        let err = showError(result.reason, i)
    }
}

// TASK 5
function runTickets(i) {
    let input = document.form5.elements;
    let min = input[0].value;
    let max = input[1].value;
    let result = luckyTickets({ "min": min, "max": max });
    if (!result.status) {
        document.getElementById('result5').innerHTML = ` ${result} `;
    } else {
        let err = showError(result.reason, i)
    }
}

// TASK 6
function runNumberSequence(i) {
    let input = document.form6.elements;
    let result = Sequence(input[0].value, input[1].value);
    if (!result.status) {
        document.getElementById('result6').innerHTML = ` ${result} `;
    } else {
        let err = showError(result.reason, i)
    }
}

// TASK 7
function runFibonacci(i) {
    let input = document.form7.elements;
    let result = fibonacci({ min: input[0].value, max: input[1].value });
    if (!result.status) {
        document.getElementById('result7').innerHTML = ` ${result} `;
    } else {
        let err = showError(result.reason, i)
    }
}
function runFibonacciLen(i) {
    let input = document.form7len.elements;
    let result = fibonacci({ min: "", max: "", length: input[0].value });
    if (!result.status) {
        document.getElementById('result7l').innerHTML = ` ${result} `;
    } else {
     let err = showError(result.reason, i)
    }
}

function showError (reason, n){
    document.getElementById(`err${n}`).innerHTML = ` ${reason} `;
    setTimeout(() => {
        document.getElementById(`err${n}`).innerHTML = "";
    }, 4000)
}