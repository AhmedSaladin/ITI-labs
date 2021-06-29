var MathUtils = require("../index");
// intro & how to disable suite or pending spec

describe("MathUtils", function () {
  var calc;

  //This will be called before running each spec
  beforeEach(function () {
    calc = new MathUtils();
  });

  describe("when calc is used to peform basic math operations", function () {
    //Spec for sum operation
    it("should be able to calculate sum of 3 and 5", function () {
      expect(calc.sum(3, 5)).toEqual(8);
      expect(calc.sum(3, 5)).toEqual(jasmine.any(Number));
      expect(calc.sum(3, 6)).not.toEqual(8);
      expect(calc.sum(3, 5)).toBe(8);
    });

    //Spec for multiply operation
    it("should be able to multiply 10 and 40", function () {
      expect(calc.multiply(10, 40)).toEqual(400);
    });

    //Spec for factorial operation for positive number
    it("should be able to calculate factorial of 9", function () {
      expect(calc.factorial(9)).toEqual(362880);
    });

    //Spec for factorial operation for negative number
    it("should be able to throw error in factorial operation when the number is negative", function () {
      expect(function () {
        calc.factorial(-7);
      }).toThrowError(Error, "There is no factorial for negative numbers");
    });

    it("should be able to calculate if number is positive or not", function () {
      expect(calc.checkPositivity(9)).toBeTruthy();
      expect(calc.checkPositivity(-1)).toBeFalsy();
    });
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////////
//scope
//differnce between toBe &toEqual

describe("study difference between toBe and toEual", function () {
  var a = { bar: "baz" },
    b = { foo: a },
    c = { foo: a };
  it("using toBe", function () {
    expect(b).not.toBe(c); //pass
    // expect(c.foo === b.foo).toBe(true);
    expect(c.foo).toBe(b.foo);
  });
  it("using toEqual", function () {
    expect(b).toEqual(c);
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////
//this keyword  & fail (force fail)

describe("A spec", function () {
  beforeEach(function () {
    this.foo = 0;
    // fail("error")
  });

  it("can use the `this` to share state", function () {
    expect(this.foo).toEqual(0);
    this.bar = "test pollution?";
  });

  it("prevents test pollution by having an empty `this` created for the next spec", function () {
    expect(this.foo).toEqual(0);
    expect(this.bar).toBe(undefined);
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////

//spy on

var Person = function () {};

Person.prototype.sayHelloWorld = function (dict) {
  return dict.hello() + " " + dict.world();
};

var Dictionary = function () {};

Dictionary.prototype.hello = function () {
  return "hello";
};

Dictionary.prototype.world = function () {
  return "world";
};

describe("Example Of jasmine Spy using spyOn()", function () {
  it('uses the dictionary to say "hello world"', function () {
    var dictionary = new Dictionary();
    var person = new Person();

    spyOn(dictionary, "hello"); // replace hello function with a spy
    spyOn(dictionary, "world"); // replace world function with another spy

    person.sayHelloWorld(dictionary);
    expect(dictionary.hello).toHaveBeenCalled();
    expect(dictionary.hello).toHaveBeenCalledTimes(1);
    expect(dictionary.hello).toHaveBeenCalledWith();
    // not possible without first spy

    expect(dictionary.world).toHaveBeenCalled();
    // not possible withoutsecond spy
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////

//create spy

describe("Example Of jasmine Spy using Create Spy", function () {
  it("can have a spy function", function () {
    var person = new Person();
    person.getName11 = jasmine.createSpy("Name spy");
    person.getName11();
    expect(person.getName11).toHaveBeenCalled();
  });
});

/////create spy obj

describe("Multiple spies, when created manually", function () {
  var tape;

  beforeEach(function () {
    tape = jasmine.createSpyObj("tape", ["play", "pause", "stop", "rewind"]);

    tape.play();
    tape.pause();
    tape.rewind(0);
  });

  it("creates spies for each requested function", function () {
    expect(tape.play).toBeDefined();
    expect(tape.play).toHaveBeenCalled();
    expect(tape.rewind).toHaveBeenCalledWith(jasmine.anything());
    expect(tape.pause).toBeDefined();
    expect(tape.stop).toBeDefined();
    expect(tape.rewind).toBeDefined();
  });
});

/////////////////////////////////////////////////////////
//mocking

const sumfunction = (a, b) => {
  return { first: a, second: b };
};

const doAdd = (a, b, callback) => {
  callback(a + b);
};

describe("Multiple spies, when created manually", function () {
  var tape;

  beforeEach(function () {
    tape = jasmine.createSpyObj("tape", ["method1"]);
  });

  it("creates spies for each requested function", function () {
   

    tape.method1.and.callFake(function () {
      return true;
    });
    doAdd(1, 3,  tape.method1);
    expect( tape.method1).toHaveBeenCalledTimes(1);
    expect(tape.method1()).toBeTruthy();
  });
});


///////////////////////////////////////////////////////////////
//expect error

var throwMeAnError = function () {
  throw new Error();
};

describe("throw error", function () {
  it("demo", function () {
    expect(throwMeAnError).toThrow();
  });
});

///////////////////////////////////////////////////////////////
//create custom matcher

describe("This custom matcher example", function () {
  beforeEach(function () {
    jasmine.addMatchers({
      toBeLarge: function () {
        return {
          compare: function (actual, expected) {
            console.log(actual);
            var result = {};
            result.pass = actual >= 100;
            result.message = "sorry this number is less than 100";
            return result;
          },
        };
      },
    });
  });

  it("Lets see whether u are teen or not", function () {
    expect(100).toBeLarge();
  });
});

/////////////////////////////////////////////////////////////////////////
//clock

describe("Manually ticking the Jasmine Clock", function() {
  var timerCallback;
  beforeEach(function() {
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().install();
  });
  afterEach(function() {
    jasmine.clock().uninstall();
  });
  
  it("causes a timeout to be called synchronously", function() {
    setTimeout(function() {
      timerCallback();
    }, 100);

    expect(timerCallback).not.toHaveBeenCalled();

    jasmine.clock().tick(101);

    expect(timerCallback).toHaveBeenCalled();
  });
  
  it("causes an interval to be called synchronously", function() {
    setInterval(function() {
      timerCallback();
    }, 100);

    expect(timerCallback).not.toHaveBeenCalled();

    jasmine.clock().tick(101);
    expect(timerCallback.calls.count()).toEqual(1);

    jasmine.clock().tick(50);
    expect(timerCallback.calls.count()).toEqual(1);

    jasmine.clock().tick(50);
    expect(timerCallback.calls.count()).toEqual(2);
  })})
