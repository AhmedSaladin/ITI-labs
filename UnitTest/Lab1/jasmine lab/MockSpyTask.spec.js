var counter = {
  currentValues: function () {
    return 1;
  },
};


function sumOfValues() {
 return counter.currentValues();
}

describe("mock and spy", function () {
  //spy on counter object currentValue property and mock its implementation to equal [100]
  // expect some of values is returning the right value (new mocked value 100) after mocking
  // and expect that we called the spy function for one time
  it("spying", function () {
   

  });

  // mock a function that takes any string and return number, call it twice and expect that it is called twice
  it("mocking", function () {
    
  });
});
