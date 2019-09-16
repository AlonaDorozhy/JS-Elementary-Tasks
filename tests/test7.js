
describe("Fibonacci number range", function () {

  describe('Checking the output of the correct result', function () {
    it(`Show result from 1 numbers to 45.`,
      function () {
        assert.equal(fibonacci({ min: "1", max: "45" }), 'Your result of fibonacci numbers in the range from 1 and to 45:  1,  1,  2,  3,  5,  8,  13,  21,  34,  ');
      });
    it(`Show result from 10 numbers to 16.`,
      function () {
        assert.equal(fibonacci({ min: "10", max: "16" }), 'Your result of fibonacci numbers in the range from 10 and to 16:  13,  ');
      });
    it(`Show result from 0 numbers to 50.`,
      function () {
        assert.equal(fibonacci({ min: "0", max: "50" }), 'Your result of fibonacci numbers in the range from 0 and to 50:  0,  1,  1,  2,  3,  5,  8,  13,  21,  34,  ');
      });
  
    it(`Show result for length 2.`,
      function () {
        assert.equal(fibonacci({ length: "2" }), 'Your result of fibonacci numbers for length 2: <br>   1. 0 <br>2. 1 <br> ');
      });
    it(`Show result for length 33.`,
      function () {
        assert.equal(fibonacci({ length: "33" }), 'Your result of fibonacci numbers for length 33: <br>   1. 0 <br>2. 1 <br>3. 1 <br>4. 2 <br>5. 3 <br>6. 5 <br>7. 8 <br>8. 13 <br>9. 21 <br>10. 34 <br>11. 55 <br>12. 89 <br>13. 144 <br>14. 233 <br>15. 377 <br>16. 610 <br>17. 987 <br>18. 1597 <br>19. 2584 <br>20. 4181 <br>21. 6765 <br>22. 10946 <br>23. 17711 <br>24. 28657 <br>25. 46368 <br>26. 75025 <br>27. 121393 <br>28. 196418 <br>29. 317811 <br>30. 514229 <br>31. 832040 <br>32. 1346269 <br>33. 2178309 <br> ');
      });
  


  })
  describe('Error checking', function () {
    it(`Failed  when length 0`,
      function () {
        assert.deepEqual((fibonacci({ length: "0" })), { status: "Failed", reason: "Passed numbers cant be 0" });
      });
    it(`Failed  when length  mote than 100`,
      function () {
        assert.deepEqual((fibonacci({ length: "101" })), { status: "Failed", reason: "Passed numbers more then 100" });
      });
    it(`Failed  when length invalid, not a number`,
      function () {
        assert.deepEqual((fibonacci({ length: "er2" })), { status: "Failed", reason: "Incorrectly entered length It must be number " });
      });
    it(`Failed  when length smaller than 0`,
      function () {
        assert.deepEqual((fibonacci({ length: "-5" })), { status: "Failed", reason: "Passed numbers smaller then 0" });
      });
    it(`Failed  when length 0`,
      function () {
        assert.deepEqual((fibonacci({ length: "0" })), { status: "Failed", reason: "Passed numbers cant be 0" });
      });
    it(`Failed  when minimum greater then maximum`,
      function () {
        assert.deepEqual((fibonacci({ min: "50", max: "1" })), { status: "Failed", reason: "The maximum value must be greater than the minimum" });
      });
    it(`Failed  when minimum not a namber`,
      function () {
        assert.deepEqual((fibonacci({ min: "5k0", max: "19" })), { status: "Failed", reason: "Incorrectly entered minimum It must be number " });
      });
    it(`Failed  when maximum not a number`,
      function () {
        assert.deepEqual((fibonacci({ min: "50", max: "1r5" })), { status: "Failed", reason: "Incorrectly entered maximum It must be number " });
      });

  })

});
