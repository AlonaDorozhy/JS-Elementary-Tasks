describe("Chessboard tests", function () {

    it(`Showing instructions  when not all parameters are entered`,
        function () {
            assert.deepEqual((chessboard("f", 4, "+")), { status: "Failed", reason: "Incorrectly entered length and / or width. It must be a number" });
        });

    it(`Showing instructions  when length or width more than 50`,
        function () {
            assert.deepEqual((chessboard(5, 55, "*")), { status: 'Failed', reason: 'Length and width should be up to 50' });
        });
    it(`Show instructions when fields are empty`,
        function () {
            assert.deepEqual((chessboard("", "", "")), { status: "Failed", reason: "All fields are empty" });
        });
    it(`A symbol cannot be a letter or a number`,
        function () {
            assert.deepEqual((chessboard(5, 5, "8")), { status: "Failed", reason: "A symbol cannot be a letter or a number" });
        });
    it(`Showing instructions  when length or width smaller 0`,
        function () {
            assert.deepEqual((chessboard(-5, 5, "-")), { status: "Failed", reason: "Length and width should be more than 0" });
        });
    it(`Checkerboard result should be a string`,
        function () {
            assert.equal((typeof (chessboard(8, 4, "*"))), 'string');
        });
    it("Is chess board 4x4 with '+' printing?", function () {
        assert.equal(chessboard(4, 4, "+"), '+&nbsp;&nbsp;+&nbsp;&nbsp;<br>&nbsp;&nbsp;+&nbsp;&nbsp;+<br>+&nbsp;&nbsp;+&nbsp;&nbsp;<br>&nbsp;&nbsp;+&nbsp;&nbsp;+<br>');
    });
    it("Is chess board 1x1 with '*' printing?", function () {
        assert.equal(chessboard(1, 1, "*"), '*<br>');
    });

});


