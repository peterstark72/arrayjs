var assert = require('assert');
var array = require('./array');


/*
    
    Mocha test suite for array.js


*/ 


describe("extent", function () {
    it("[1,2,4,5] should return [1,5]", function (done) {
        assert.equal(array.extent([1,2,4,5])[0], 1);
        assert.equal(array.extent([1,2,4,5])[1], 5);
        done();
    });
    it("Empty array throws error", function (done) {
        assert.throws(function () {array.extent([]);}, Error);
        done();
    });    
    it("Undefined throws error", function (done) {
        assert.throws(function () {array.extent(undefined);}, Error);
        done();
    });        
});


describe("sum", function () {
    it("[1,2,2] should return 5", function (done) {
        assert.equal(array.sum([1,2,2]), 5);
        done();
    });
    it("[{a:1}, {a:2}, {a:2}] should return 5", function (done) {
        assert.equal(array.sum([{a:1}, {a:2}, {a:2}], function (d) {return d.a; }), 5);
        done();
    });    
    it("Empty array returns zero", function (done) {
        assert.equal(array.sum([]), 0);
        done();
    });    
    it("Undefined returns undefined", function (done) {
        assert.equal(array.sum(undefined), undefined);
        done();
    });        
});


describe("max", function () {
    it("[1,2,3] should return 3", function (done) {
        assert.equal(array.max([1,2,3]), 3);
        done();
    });
    it("Empty array returns zero", function (done) {
        assert.equal(array.max([]), 0);
        done();
    });    
    it("Undefined returns undefined", function (done) {
        assert.equal(array.max(undefined), undefined);        
        done();
    });        
});

describe("min", function () {
    it("[1,2,3] should return 1", function (done) {
        assert.equal(array.min([1,2,3]), 1);
        done();
    });
    it("Empty array returns zero", function (done) {
        assert.equal(array.min([]), 0);
        done();
    });    
    it("Undefined returns undefined", function (done) {
        assert.equal(array.min(undefined), undefined);
        done();
    });        
});

describe("mean", function () {
    it("[1,2,3] should return 2", function (done) {
        assert.equal(array.mean([1,2,3]), 2);
        done();
    });
    it("Empty array returns zero", function (done) {
        assert.equal(array.mean([]), 0);
        done();
    });    
    it("Undefined returns undefined", function (done) {
        assert.equal(array.mean(undefined), undefined);
        done();
    });        
});

describe("count", function () {
    it("[1,2,3] should return 3", function (done) {
        assert.equal(array.count([1,2,3]), 3);
        done();
    });
    it("Empty array returns zero", function (done) {
        assert.equal(array.mean([]), 0);
        done();
    });    
    it("Undefined returns undefined", function (done) {
        assert.equal(array.count(undefined), undefined);
        done();
    });        
});


describe("sort", function () {
    it("[1,3,2] should return [3,2,1]", function (done) {
        var sorted = array.sort([1,3,2]);
        assert.equal(sorted[0], 3);
        assert.equal(sorted[1], 2);
        assert.equal(sorted[2], 1);
        done();
    });
    it("Empty array returns zero", function (done) {
        assert.equal(array.sort([]), 0);
        done();
    });    
    it("Undefined returns undefined", function (done) {
        assert.equal(array.sort(undefined), undefined);
        done();
    });        
});