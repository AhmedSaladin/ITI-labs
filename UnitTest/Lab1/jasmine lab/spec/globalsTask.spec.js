const { sum, positive } = require("../index");

describe("testing math utilities", () => {
  let pos_vals;
  let neg_vals;
  let vals;
  let sum_of_vals;

  beforeAll(() => {
    // at before all assign pos vals with array of positive numbers,
    pos_vals = [1, 2, 3, 4, 5];
    // and assign negative vals with negative array of numbers,
    neg_vals = [-1, -2, -3, -4];
    // assign vals to pos_vals.concat(neg_vals);
    vals = pos_vals.concat(neg_vals);
    // assign  sum_of_vals to vals.reduce((x, y) => x + y, 0));
    sum_of_vals = vals.reduce((x, y) => x + y, 0);
  });

  beforeEach(() => {
    // at before each console.log all vals
    console.log(pos_vals);
    console.log(neg_vals);
    console.log(vals);
    console.log(sum_of_vals);
  });

  afterEach(() => {
    // at after each console.log done
    console.log("done");
  });

  afterAll(() => {
    // at after all set all variables to 0
    pos_vals = 0;
    neg_vals = 0;
    vals = 0;
    sum_of_vals = 0;
  });

  it("sum function should equal to sum of the values", () => {
    expect(sum(vals)).toBe(sum_of_vals);
  });

  it("positive function should equal to positive values", () => {
    expect(positive(vals)).toEqual(pos_vals);
  });
  
});
