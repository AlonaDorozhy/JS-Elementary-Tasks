describe("Lucky Tickets", function () {

  describe('Checking the output of the correct result', function () {
    it(`Show result if no winner found.`,
      function () {
        assert.equal(luckyTickets({ min: "1", max: "10" }), 'Simple: 0  Hard: 0 <br> WINNER: No winner ');
      });
    it(`It converts object data  to array  and returns  it .`,
      function () {
        assert.equal(luckyTickets({ min: "1", max: "10" }).toString(), 'Simple: 0  Hard: 0 <br> WINNER: No winner ');
      });
    
    it(`Show result if winner hard and simple have 0.`,
      function () {
        assert.equal(luckyTickets({ min: "1", max: "160" }), 'Simple: 0  Hard: 5 <br> WINNER: hard');
      });
    it(`Show result if winner hard.`,
      function () {
        assert.equal(luckyTickets({ min: "5000", max: "9000" }), 'Simple: 130  Hard: 210 <br> WINNER: hard');
      });
 
    it(`Show result if winner simple.`,
      function () {
        assert.equal(luckyTickets({ min: "100000", max: "200000" }), 'Simple: 5280  Hard: 2455 <br> WINNER: simple');
      });
 
    it(`Show result if minimum value 1 maximum value 999999.`,
      function () {
        assert.equal(luckyTickets({ min: "1", max: "999999" }), 'Simple: 55251  Hard: 25080 <br> WINNER: simple');
      });
 
  })
  describe('Error checking', function () {
    it(`Failed  when all fields are empty`,
      function () {
        assert.deepEqual((luckyTickets({ min: "", max: "" })), { status: "Failed", reason: "All fields are empty, value cannot be a zero" });
      });
    it(`Failed  when one of the fields is a negative number`,
      function () {
        assert.deepEqual((luckyTickets({ min: "-5", max: "5" })), { status: "Failed", reason: "Incorrectly entered min and / or max. It must be only a positive number" });
      });
    it(`Failed  when min field is empty`,
      function () {
        assert.deepEqual((luckyTickets({ min: "", max: "6" })), { status: "Failed", reason: "Min field is empty" });
      });
    it(`Failed  when max field is empty`,
      function () {
        assert.deepEqual((luckyTickets({ min: "8", max: "" })), { status: "Failed", reason: "Max field is empty" });
      });
    it(`Failed  when the minimum value higher than the maximum value.`,
      function () {
        assert.deepEqual((luckyTickets({ min: "15", max: "2" })), { status: "Failed", reason: "The minimum value must be less than the maximum value." });
      });
    it(`Failed  when the maximum value exceed 999999.`,
      function () {
        assert.deepEqual((luckyTickets({ min: "15", max: "1000000" })), { status: "Failed", reason: "The possible maximum value cannot exceed 999999." });
      });
    it(`Failed  when the minimum value equal maximum.`,
      function () {
        assert.deepEqual((luckyTickets({ min: "150", max: "150" })), { status: "Failed", reason: "Maximal and minimal value cannot be equal." });
      });

  })

});
