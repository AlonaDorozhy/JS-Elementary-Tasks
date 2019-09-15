
describe("Numerical sequence", function () {

  describe('Checking the output of the correct result', function () {
    it(`Show result of 3 numbers if square 36.`,
      function () {
        assert.equal(Sequence(3, 36), 'Your result : 6, 7, 8');
      });
    it(`Show result of 1 numbers if square 25.`,
      function () {
        assert.equal(Sequence(1, 25), 'Your result : 5');
      });
    it(`Show result of 5 numbers if square 9.`,
      function () {
        assert.equal(Sequence(5, 9), 'Your result : 3, 4, 5, 6, 7');
      });
    it(`If enter correct value type of result would be "object"`,
      function () {
        let result = Sequence(9, 5);
        assert.equal(typeof result, 'object');
      });
    it(`It returns  result in string .`,
      function () {
        assert.equal(Sequence(1, 25).toString(), 'Your result : 5');
      });

   

  })
  describe('Error checking', function () {
    it(`Failed  when all fields are empty`,
      function () {
        assert.deepEqual((Sequence("", "")), { status: "Failed", reason: "All fields are empty, value cannot be a zero" });
      });
  
    it(`Failed  when length field are empty`,
      function () {
        assert.deepEqual((Sequence("", "36")), { status: "Failed", reason: "Length field is empty" });
      });

    it(`Failed  when square field are empty`,
      function () {
        assert.deepEqual((Sequence("5", "")), { status: "Failed", reason: "Square field is empty" });
      });
  
    it(`Failed incorrectly entered length and / or square.`,
      function () {
        assert.deepEqual((Sequence("5t", "25")), { status: "Failed", reason: "Incorrectly entered length and / or square. It must be only a positive number" });
      });
  
    it(`Failed  when passed arguments cannot be the square`,
      function () {
        assert.deepEqual((Sequence("2", "37")), { status: "Failed", reason: "The passed value in arguments cannot be the square of a number." });
      });
    
  })

});
