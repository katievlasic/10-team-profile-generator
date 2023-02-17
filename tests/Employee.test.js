const Employee = require("../lib/Employee"); // need class name capitalized and ../ jumps up a directory

test("name can be set using a constructor", () => {
  const employee = new Employee("Katie", 1, "test@gmail.com"); // create new 'dummy' data
  expect(employee.name).toBe("Katie");
});

test("method test", () => {
  const employee = new Employee("Katie", 1, "test@gmail.com"); // create new 'dummy' data
  expect(employee.getName()).toBe("Katie");
});

// remove const { default: test } = require('node:test');
