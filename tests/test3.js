describe("Triangle", function () {

  describe('Checking the output of the correct result', function () {
    it(`It converts object data  to array  and returns  it .`,
      function () {
        assert.equal(triangles([{ vertices: 'ABC', a: 1, b: 2, c: 3 }]).toString(), ' ABC :  0 </br>');
      });
    it(`It Converts vertex names to uppercase . `,
      function () {
        assert.equal(triangles([{ vertices: 'abc', a:" 3", b:" 3", c: "5" }]).toString(), ' ABC :  4.15 </br>');
      });
    it(`Show result if submitted only one triangle.`,
      function () {
        assert.equal((triangles([{ vertices: "ABC", a: "10", b: "10", c: "15" }])), ' ABC :  49.61 </br>');
      });




  })
  describe('Error checking', function () {
    it(`Failed  when all fields are empty`,
      function () {
        assert.deepEqual((triangles([{ vertices: "", a: "", b: "", c: "" }])), { status: "Failed", reason: "All fields are empty" });
      });
    it(`Failed when vertex name not passed!`,
      function () {
        assert.deepEqual((triangles([{ vertices: "", a: 10, b: 10, c: 19.55 }])), { status: "Failed", reason: "Vertex name not passed!" });
      });
    it(`Failed when vertex name not a 3 letters!`,
      function () {
        assert.deepEqual((triangles([{ vertices: "R", a: 10, b: 10, c: 19.55 }])), {
          status: "Failed", reason: 'The name of the vertices must be 3 letters.',
        });
      });
    it(`The name of the vertices cannot be more than three letters.`,
      function () {
        assert.deepEqual((triangles([{ vertices: "RTYU", a: 10, b: 10, c: 19.55 }])), { status: "Failed", reason: "The name of the vertices cannot be more than three letters." });
      });
    it(`Incorrectly entered sides,the sides of the triangle must be a positive number`,
      function () {
        assert.deepEqual((triangles([{ vertices: "RTD", a: -5, b: 10, c: 19.55 }])), { status: "Failed", reason: "Incorrectly entered sides,the sides of the triangle must be a positive number" });
      });
    it(`Failed when incorrectly entered sides, sides not  a number!`,
      function () {
        assert.deepEqual((triangles([{ vertices: "ASD", a: "t", b: 10, c: 19.55 }])), { status: "Failed", reason: "Incorrectly entered sides, sides can only be a number" });
      });

    it(`Failed when sides of triangle  more than 50!`,
      function () {
        assert.deepEqual((triangles([{ vertices: "OPL", a: 10, b: 65, c: 19.55 }])), { status: "Failed", reason: "Sides of triangle cant be more than 50" });
      });

    it(`Failed when one side of the triangle is greater than the sum of the other two!`,
      function () {
        assert.deepEqual((triangles([{ vertices: "REW", a: 10, b: 45, c: 19.55 }])), { status: "Failed", reason: 'One side of the triangle is greater than the sum of the other two' });
      });



  })



});
