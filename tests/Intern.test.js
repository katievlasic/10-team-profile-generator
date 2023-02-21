const Intern = require("../lib/Intern"); // need class name capitalized and ../ jumps up a directory

test("name can be set using a constructor", () => {
  const employee = new Intern("Katie", 1, "test@gmail.com","University of Minnesota"); // create new 'dummy' data
  expect(employee.name).toBe("Katie");
});

test("id can be set using a constructor", () => {
  const employee = new Intern("Katie", 1, "test@gmail.com","University of Minnesota"); 
  expect(employee.id).toBe(1);
});

test("email can be set using a constructor", () => {
  const employee = new Intern("Katie", 1, "test@gmail.com","University of Minnesota"); 
  expect(employee.email).toBe("test@gmail.com");
});

test("school can be set using a constructor", () => {
  const employee = new Intern("Katie", 1, "test@gmail.com","University of Minnesota");
  expect(employee.school).toBe("University of Minnesota");
});

test("getRole method test", () => {
    const employee = new Intern("Katie", 1, "test@gmail.com","University of Minnesota"); 
    expect(employee.getRole()).toBe("Intern");
  });