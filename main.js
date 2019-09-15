
// TASK 1


function chessBoardRun(n) {
    let input = document.form1.elements;
    let result = chessboard(input[0].value, input[1].value, input[2].value);
    console.log(result);
    if (!result.status) {
        document.getElementById('result1').innerHTML = ` ${result} `;
    } else {
        document.getElementById('err1').innerHTML = ` ${result.reason} `;
        document.getElementById('err1').style = "color:  rgba(245, 25, 25, 0.616);";
        setTimeout(() => {
            document.getElementById('err1').innerHTML = "";
        }, 4000)
    }
}


// TASK 2
function runEnvelopes(i) {
    let input = document.form2.elements;//get inputs
    let env1 = [input[0].value, input[1].value]
    let env2 = [input[2].value, input[3].value]
    console.log(env1, env2);
    let result = envelope(env1, env2);
    console.log(result);
    console.log(result.status);
    if (!result.status) {
        document.getElementById('result2').innerHTML = ` ${result} `;
    } else {
        document.getElementById('err2').innerHTML = ` ${result} `;
        document.getElementById('err2').style = "color:  rgba(245, 25, 25, 0.616);";
        setTimeout(() => {
            document.getElementById('err2').innerHTML = "";
        }, 4000)
    }
}

//TASK 3
function allTriangles(n) {
    let arrayTriangles = [];
    let getTriangles = document.querySelectorAll(".triangle");

    for (let i = 0; i < getTriangles.length; i++) {
        let sidesOfTriangle = getTriangles[i].querySelectorAll("input");
        let triangle = {
            vertices: (sidesOfTriangle[0].value).toUpperCase(),
            a: sidesOfTriangle[1].value,
            b: sidesOfTriangle[2].value,
            c: sidesOfTriangle[3].value,
        };
        arrayTriangles.push(triangle);
    }

    let result = triangles(arrayTriangles);
    console.log(result);
    console.log(result.status);
    if (!result.status) {
        for (i = 0; i< result.length; i++){
            document.getElementById('result3').innerHTML = ` ${result[i]} `;
        }
        document.getElementById('result3').innerHTML = ` ${result} `;
    } 
    else {
        document.getElementById('err3').innerHTML = ` ${result.reason} `;
        document.getElementById('err3').style = "color:  rgba(245, 25, 25, 0.616);";
        setTimeout(() => {
            document.getElementById('err3').innerHTML = "";
        }, 4000)
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



function runPalindrome(p) {
    let value = document.form4.elements[0].value;

    let result = Palindrome(value);

    if (!result.status) {
        document.getElementById('result4').innerHTML = ` ${result} `;
    } else {
        document.getElementById('err4').innerHTML = ` ${result.reason} `;
        document.getElementById('err4').style = "color:  rgba(245, 25, 25, 0.616);";
        setTimeout(() => {
            document.getElementById('err4').innerHTML = "";
        }, 4000)
    }

    
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