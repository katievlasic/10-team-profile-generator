const Employee = require("../lib/Employee"); // need class name capitalized and ../ jumps up a directory

test("name can be set using a constructor", () => {
  const employee = new Employee("Katie", 1, "test@gmail.com"); // create new 'dummy' data
  expect(employee.name).toBe("Katie");
});
test("id should be a number", () => {
  const employee = new Employee("Katie", 1, "test@gmail.com"); // create new 'dummy' data
  expect(employee.id).toBe(1);
});
test("email should contain an @ symbol", () => {
  const employee = new Employee("Katie", 1, "test@gmail.com"); // create new 'dummy' data
  expect(employee.email).toBe("test@gmail.com");
});

test("getName method test", () => {
  const employee = new Employee("Katie", 1, "test@gmail.com"); // create new 'dummy' data
  expect(employee.getName()).toBe("Katie");
});
test("getRole method test", () => {
  const employee = new Employee("Katie", 1, "test@gmail.com"); // create new 'dummy' data
  expect(employee.getRole()).toBe("employee");
});
test("getId method test", () => {
  const employee = new Employee("Katie", 1, "test@gmail.com"); // create new 'dummy' data
  expect(employee.getId()).toBe(1);
});
test("getEmail method test", () => {
  const employee = new Employee("Katie", 1, "test@gmail.com"); // create new 'dummy' data
  expect(employee.getEmail()).toBe("test@gmail.com");
});

// remove const { default: test } = require('node:test');
