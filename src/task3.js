function triangles(array) {
    let p, S, result = "",
        info = []
    let sortArray = []
    if (!checkValidTriangles(array)) {
        for (let i = 0; i < array.length; i++) {
            info.push(Object.values(array[i]));
            p = ((parseFloat(info[i][1]) + parseFloat(info[i][2]) + parseFloat(info[i][3])) * 0.5).toFixed(2);
            S = Math.sqrt(p * (p - parseFloat(info[i][1])) * (p - parseFloat(info[i][2])) * (p - parseFloat(info[i][3]))).toFixed(2);
            sortArray.push([parseFloat(S), array[i].vertices.toUpperCase()])
        }
        sortArray.sort(function (a, b) {
            if (a[0] > b[0])  return -1;
            if (a[0] < b[0]) return 1;
            return 0;
        });
        for (i = 0; i < sortArray.length; i++) {
            result += ` ${sortArray[i][1]} :  ${sortArray[i][0]} </br>`
        }
        return result
    } else {
        result = checkValidTriangles(array)
        return result
    }

}

function checkValidTriangles(arr) {

    let message
    let frs = []
    let uni = [];
    for (i = 0; i < arr.length; i++) {
        frs.push(arr[i].vertices)
        function unique(frs) {
            uni = [];
            for (let str of frs) {
                if (!uni.includes(str)) {
                    uni.push(str);
                }
            }
            return uni;
        }
    }
    if (unique(frs).length !== frs.length) {
        message = {
            status: 'Failed',
            reason: 'Triangles must have unique vertex names!',
        };
    }

    if (Array.isArray(arr) && arr.length > 0) {
        arr.forEach((triangle) => {
            let value = Object.values(triangle);
            let vert = value[0].toUpperCase();
            let a = parseFloat(value[1]);
            let b = parseFloat(value[2]);
            let c = parseFloat(value[3]);
            let reg = /[0-9]/g
            let v = vert.replace(reg, "")

            if (v.length === 0 && value[1].length === 0 && value[2].length === 0 && value[3].length === 0) {
                message = {
                    status: 'Failed',
                    reason: 'All fields are empty',
                };
                return message
            }
            if (v.length === 0) {
                message = {
                    status: 'Failed',
                    reason: 'Vertex name not passed!',
                };
                return message
            }
            if (v.length < 3) {
                message = {
                    status: 'Failed',
                    reason: 'The name of the vertices must be 3 letters.',
                };
                return message
            }
            if (v.length > 3) {
                message = {
                    status: 'Failed',
                    reason: 'The name of the vertices cannot be more than three letters.',
                };
                return message
            }
            if (Number(value[1]) < 0 || Number(value[2]) < 0 || Number(value[3]) < 0) {
                message = {
                    status: 'Failed',
                    reason: 'Incorrectly entered sides,the sides of the triangle must be a positive number',
                };
                return message;
            }
            if (!Number(value[1]) || !Number(value[2]) || !Number(value[3])) {
                message = {
                    status: 'Failed',
                    reason: 'Incorrectly entered sides, sides can only be a number',
                };
                return message;
            }
            if (a > 50 || b > 50 || c > 50) {
                message = {
                    status: 'Failed',
                    reason: 'Sides of triangle cant be more than 50',
                };
                return message;
            }
            if ((Number(value[1]) > Number(value[2]) + Number(value[3])) ||
                (Number(value[2]) > Number(value[1]) + Number(value[3])) ||
                (Number(value[3]) > Number(value[1]) + Number(value[2]))) {
                message = {
                    status: 'Failed',
                    reason: 'One side of the triangle is greater than the sum of the other two',
                };

                return message

            }
        })
   
    }
    return message

}
