const sum = require("../index.js");
var expect = require("chai").expect;
var assert = require("chai").assert;
var should=require("chai").should();

describe("function sum that adds two numbers",function(){

    it("add two positive numbers using expect",function(){

        expect(sum(1,1)).to.be.equal(2);
    });
    it("add two positive numbers using assert",function(){

        assert.equal(sum(1,1),2);
    });

    it("add two positive numbers using should",function(){

      sum(1,1).should.equal(2)
    })


})
