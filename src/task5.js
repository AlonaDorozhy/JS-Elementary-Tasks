const ticketMaxLength = 6;

function luckyTickets(context) {
    let min = Number(context.min);
    let max = Number(context.max);
    let simple = 0;
    let hard = 0;
    let result;
    let count; 
    console.log(context);
    if (!checkValidTicket(context)) {
        for (min; min <= max; min++) {
            let currentTicket = String(min);

            if (currentTicket.length < ticketMaxLength) {
                currentTicket = "0".repeat(ticketMaxLength - currentTicket.length) + currentTicket;
            }
            let ticketArray = currentTicket.split("").map(number => Number(number));
            simple += simpleMethod(ticketArray);
            hard += hardMethod(ticketArray);
            
        }
        count = { simple, hard };
        if (simple === hard) {
            count.winner = "No winner ";
        } else  count.winner = (simple > hard) ? "simple" : "hard";
        result = `Simple: ${count.simple}  Hard: ${count.hard} <br> WINNER: ${count.winner}`
       
        console.log(result);
        return result;

    }else{
        result = checkValidTicket(context);
        console.log(result);
        return result;
    }
}

function simpleMethod(ticket) {
    let leftSide = ticket[0] + ticket[1] + ticket[2];
    let rightSide = ticket[3] + ticket[4] + ticket[5];
    return leftSide === rightSide;
}

function hardMethod(ticket) {
    let even = 0;
    let odd = 0;
    ticket.forEach(number => (number % 2) ? even += number : odd += number);
    return even === odd;
}

function checkValidTicket(context) {
    let min = Number(context.min);
    let max = Number(context.max);
    let reg = /^\d+$/;
    let message = "";
    
    if (min === 0 && max === 0) {
        message = {
            status: 'Failed',
            reason: 'All fields are empty, value cannot be a zero',
        };
        return message
    }
    else if (min === 0) {
        message = {
            status: 'Failed',
            reason: 'Min field is empty',
        };
        return message
    }
   else if (max === 0) {
        message = {
            status: 'Failed',
            reason: 'Max field is empty',
        };
        return message
    }
    else if (reg.test(min) === false || reg.test(max) === false) {
        message = {
            status: 'Failed',
            reason: 'Incorrectly entered min and / or max. It must be only a positive number',
        };
        return message
    }
    else if (min > max || max ===0 ) {
        message = {
            status: 'Failed',
            reason: 'The minimum value must be less than the maximum value.',
        };
        return message
    }
    else if ( max > 999999 ) {
        message = {
            status: 'Failed',
            reason: 'The possible maximum value cannot exceed 999999.',
        };
        return message
    }
    else if ( max === min ) {
        message = {
            status: 'Failed',
            reason: 'Maximal and minimal value cannot be equal.',
        };
        return message
    }
    return message
}
