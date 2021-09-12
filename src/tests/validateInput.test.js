const { test, expect } = require("@jest/globals");
const validateInput = require("../validateInput");


test("validates the input", function () {
    expect(validateInput(2,5)).toBe(true);
});
