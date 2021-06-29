const assert=require("chai").assert;
const expect = require("chai").expect;
const should=require("chai").should();
const index=require("../index")


describe("tests on converToArray function using assert style",function(){


    it("returned array",function(){

        assert.isArray(index.convertToArray(1,2,3,4))
    });

    it("returned array includes ",function(){

        assert.include(index.convertToArray(1,2,3,4),2)
    });

    it("returned array length ",function(){

        assert.lengthOf(index.convertToArray(1,2,3,4),4)
    });

})


/////////////////////////////////////////////////////


describe("tests on converToArray function using expect style",function(){


    it("returned array",function(){

        expect(index.convertToArray(1,2,3,4)).to.be.an('array').that.includes(2);
    });


    it("returned array length ",function(){

        expect(index.convertToArray(1,2,3,4)).to.have.lengthOf(4);
    
    });

})


///////////////////////////////////////////////////////

describe("tests on converToArray function using should style",function(){


    it("returned array",function(){

        index.convertToArray(1,2,3,4).should.be.an('array').that.includes(2);   
     });


    it("returned array length ",function(){

        index.convertToArray(1,2,3,4).should.have.lengthOf(4);
    
    });

})