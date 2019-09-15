describe("Palindrome", function () {

  describe('Checking the output of the correct result', function () {
    it(`Finds a palindrome in a string of numbers.`,
      function () {
        assert.equal(Palindrome("3456776589"), 'The longest palindrome from this number 567765. </br>  All of the found palindromes : 77,6776,567765');
      });
    it(`Finds a palindrome in a string of numbers that contained only one palindrome.`,
      function () {
        assert.equal(Palindrome("01233"), 'The longest palindrome from this number 33. </br>  All of the found palindromes : 33');
      });
    it(`Finds a palindrome in a string of 2 numbers.`,
      function () {
        assert.equal(Palindrome("22"), 'The longest palindrome from this number 22. </br>  All of the found palindromes : 22');
      });
    it(`Finds a palindrome in a string of zeros.`,
      function () {
        assert.equal(Palindrome("0000"), 'The longest palindrome from this number 0000. </br>  All of the found palindromes : 00,00,00,000,000,0000');
      });
    it(`Show message if submit only one digit!.`,
      function () {
        assert.equal(Palindrome("5"), 'Unable to find a palindrome in one digit!');
      });
    it(`Show message if palindrome is not found!.`,
      function () {
        assert.equal(Palindrome("123456"), 'Palindrome not found in this number');
      });
   
  })
  describe('Error checking', function () {
    it(`Failed  when field are empty`,
      function () {
        assert.deepEqual((Palindrome("")), { status: "Failed", reason: "Sent field is empty" });
      });
    it(`Failed  when sending a negative number!`,
      function () {
        assert.deepEqual((Palindrome("-5")), { status: "Failed", reason: "The submitted palindrome should only contain positive numbers!" });
      });
    it(`Failed when a numerical palindrome is entered incorrectly, it contains letters!`,
      function () {
        assert.deepEqual((Palindrome("345r54")), { status: "Failed", reason: "The submitted palindrome should only contain positive numbers!" });
      });
    it(`Failed when a submitted palindrome longer than 50!`,
      function () {
        assert.deepEqual((Palindrome("012345678901234567890123456789012345678901234567890")), { status: "Failed", reason: "The submitted palindrome should be no longer than 50!" });
      });

  })

});
