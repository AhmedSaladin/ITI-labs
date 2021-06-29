const index=require("../index");
const assert = require("assert");

describe("testing sum function",function(){

it("test that function takes two numbers and return sum ",function(){
    assert.equal(index.sum(2,2),4)
});

it("function takes negative numbers and return sum",function(){

    assert.equal(index.sum(-3,-5),-8)
})


});


