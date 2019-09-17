function Palindrome(number) {
    let num = number;
    let palindromes = [];
    let longest;
  
    if (!checkValidPal(num)) {
        if(num.length ===1 ){
            result = `Unable to find a palindrome in one digit!`;
            return result;
        }
        while (num.length !== 0) {
            for (let i = 1; i < num.length; i++) {
                if (num.substring(0, i + 1) === num.substring(0, i + 1).split("").reverse("").join("")) {
                    palindromes.push(num.substring(0, i + 1));
                }
            }
            num = num.substring(1);
        }
        palindromes.sort(function (a, b) {
            return a.length - b.length;
        })
        if (palindromes.length === 0) {
            result = `Palindrome not found in this number`;
            return result;
        }
        longest = palindromes[palindromes.length - 1];
        result = `The longest palindrome from this number ${longest}. </br>  All of the found palindromes : ${palindromes}`
    }
    else {
        result = checkValidPal(num);
        return result;
    }
 
    return result

}

function checkValidPal(pal) {

    let message = "";
    if (pal.length === 0) {
        message = {
            status: 'Failed',
            reason: 'Sent field is empty',
        };
        return message;
    }
    else if ((pal.match(/^[0-9]+$/) != null) == false) {
        message = {
            status: 'Failed',
            reason: 'The submitted palindrome should only contain positive numbers!',
        };
        return message;
    }
    else if (pal.length > 50) {
        message = {
            status: 'Failed',
            reason: 'The submitted palindrome should be no longer than 50!',
        };
        return message;
    }
    return message;
}
