const {returnTwo, greeting, add, multiply, divide, subtract} = require("./functions");

test("test returnTwo returns 2", () => expect(returnTwo()).toBe(2));

describe("test greeting returns correct string", () => {
    test("greeting(name) returns correct string", () => 
    expect(greeting("James")).toBe("Hello, James."),
    expect(greeting("Jill")).toBe("Hello, Jill.")
    );
});

describe("test math functions", () => {
    test("math functions return correct sum", () => 
    expect(add(1,2)).toEqual(3),
    expect(add(5,9)).toEqual(14),
    expect(subtract(2,1)).toEqual(1),
    expect(subtract(9,5)).toEqual(4),
    expect(multiply(1,2)).toEqual(2),
    expect(multiply(5,9)).toEqual(45),
    expect(divide(2,1)).toEqual(2),
    expect(divide(45,9)).toEqual(5)
    );
});