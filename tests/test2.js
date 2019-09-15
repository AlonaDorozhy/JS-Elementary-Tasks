describe("Envelopes", function () {

  describe('Checking the output of the correct result', function () {

    it(`Show the result whether the first envelope will fit in the second if the second is larger`,
      function () {
        assert.equal(envelope(["3", "4"], ["5", "6"]), 'The first envelope will fit in the second' );
      });
    it(`Show the result whether the second envelope will fit in the first if the second is larger`,
      function () {
        assert.equal(envelope(["5", "4"], ["3", "2"]), 'The second envelope will fit in the first');
      });
    it(`Show the result whether  the first envelope will fit in the second diagonally.`,
      function () {
        assert.equal(envelope(["5.5", "1"], ["5", "5"]), 'The first envelope will fit in the second diagonally.');
      });
    it(`Show the result whether the second envelope will fit in the first diagonally.`,
      function () {
        assert.equal(envelope(["5.5", "5"], ["6", "1"]), 'The second envelope will fit in the first diagonally');
      });
    it(`Show the result whether envelopes are the same size`,
      function () {
        assert.equal(envelope(["3", "4"], ["3", "4"]), 'These envelopes are the same size' );
      });
    it(`Show the result whether envelopes have a same size side`,
      function () {
        assert.equal(envelope(["3", "4"], ["3", "6"]), 'These envelopes have a same size side' );
      });
    it(`Show the result whether these envelopes don't fit on top of each other.`,
      function () {
        assert.equal(envelope(["4.5", "5"], ["5", "1.8"]), 'These envelopes don\'t fit on top of each other.' );
      });
  
  })
  describe('Error checking', function () {
    it(`Failed  when all fields are empty`,
      function () {
        assert.deepEqual((envelope(["",""],["", ""])), { status: "Failed", reason: "All fields are empty" });
      });
    it(`Failed when envelope 1 fields are empty`,
      function () {
        assert.deepEqual((envelope(["", ""], ["1", "4"])), { status: "Failed", reason: "Envelope 1 fields are empty" });
      });
    it(`Failed  when envelope 2 fields are empty`,
      function () {
        assert.deepEqual((envelope(["4", "4"], ["", ""])), { status: "Failed", reason: "Envelope 2 fields are empty" });
      });
    it(`Failed  when  at least one field empty `,
      function () {
        assert.deepEqual((envelope(["4", "4"], ["", "5"])), { status: "Failed", reason: "There is at least one empty field." });
      });
    it(`Failed  when   entered height and / or width incorrect. `,
      function () {
        assert.deepEqual((envelope(["p", "4"], ["2", "5"])), { status: "Failed", reason: "Incorrectly entered height and / or width. It must be a number" });
      });
    it(`Failed  when  height or width smaller than 0`,
      function () {
        assert.deepEqual((envelope(["-4", "4"], ["3", "5"])), { status: "Failed", reason: "Height and width should be more than 0" });
      });
    it(`Failed  when  height or width more than 50`,
      function () {
        assert.deepEqual((envelope(["55", "4"], ["3", "5"])), { status: "Failed", reason: "Height and width should be up to 50" });
      });

  })

 

});

let doc = document.getElementsByTagName("h1") 
console.log(doc);
