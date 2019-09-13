function chessboard(len, wid, sym) {
    let rows = "";

    if (!checkValid(len, wid, sym)) {
        for (let i = 0; i < wid; i++) {
            for (let j = 0; j < len; j++) {
                if ((j + i) % 2 === 0) {
                    rows += sym
                }
                else {
                    rows += `&nbsp;&nbsp;`
                }
            }
            rows += '<br>'
        }
    }
    else {
      let  Invalid = checkValid(len, wid, sym)
        return Invalid 
    }

    return rows;
} 

function checkValid(l, w, s) {
    let message = ""
    let reg = /^\d+$/;
    let regNum = /[a-zA-Z 1-9]/g
    
    if (!reg.test(l) && !reg.test(w) && !parseInt(l, 10) && !parseInt(w, 10)) {
        message = {
            status: 'Failed',
            reason: 'Not enough arguments. Incorrectly entered length and / or width. It must be a number',
        };
    } 
    else if (regNum.test(s) === true) {
        message = {
            status: 'Failed',
            reason: 'A symbol cannot be a letter or a number',
        };
    }
    if (l === 0 || w===0 ) {
        message = {
            status: 'Failed',
            reason: 'Not enough arguments',
        };
    }
    if (!parseInt(l, 10)  || !parseInt(w, 10) ) {
        message = {
            status: 'Failed',
            reason: 'Incorrectly entered length and / or width. It must be a number',
        };
    } 
    else if (typeof s !== 'string') {
        message = {
            status: 'Failed',
            reason: 'Symbol should be a string',
        };
    }
    else if (!s) {
        message = {
            status: 'Failed',
            reason: 'Empty field with symbol',
        };
    }
     else if (l < 0 || w < 0 ){
         message = {
             status: 'Failed',
             reason: 'Length and width should be more than 0',
         };
     }
    else if (l > 50 || w > 50) {
        message = {
            status: 'Failed',
            reason: 'Length and width should be up to 50',
        };
    }

    return message

}





