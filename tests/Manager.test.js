const Manager = require("../lib/Manager"); // need class name capitalized and ../ jumps up a directory

test("name can be set using a constructor", () => {
  const employee = new Manager("Katie", 1, "test@gmail.com",8675309); // create new 'dummy' data
  expect(employee.name).toBe("Katie");
});
test("name can be set using a constructor", () => {
  const employee = new Manager("Katie", 1, "test@gmail.com",8675309); 
  expect(employee.id).toBe(1);
});
test("name can be set using a constructor", () => {
  const employee = new Manager("Katie", 1, "test@gmail.com",8675309); 
  expect(employee.email).toBe("test@gmail.com");
});
test("name can be set using a constructor", () => {
  const employee = new Manager("Katie", 1, "test@gmail.com",8675309); 
  expect(employee.officeNumber).toBe(8675309);
});