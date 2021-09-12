const { test, expect } = require("@jest/globals");
const operation = require(".././operation");


test("returns the required value -> last element of an array", function() {
    expect(operation.popProcessedValues([10,15,20])).toBe(20);
});

test("processes the values", function() {
    expect(JSON.stringify(operation.processValues([10,15,20,5]))).toBe("[10,15,20]");
});