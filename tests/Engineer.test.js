const Engineer = require("../lib/Engineer"); // need class name capitalized and ../ jumps up a directory

test("name can be set using a constructor", () => {
  const employee = new Engineer("Katie", 1, "test@gmail.com","katievlasic"); // create new 'dummy' data
  expect(employee.name).toBe("Katie");
});
test("id can be set using a constructor", () => {
  const employee = new Engineer("Katie", 1, "test@gmail.com","katievlasic"); 
  expect(employee.id).toBe(1);
});
test("email can be set using a constructor", () => {
  const employee = new Engineer("Katie", 1, "test@gmail.com","katievlasic");
  expect(employee.email).toBe("test@gmail.com");
});
test("github can be set using a constructor", () => {
  const employee = new Engineer("Katie", 1, "test@gmail.com","katievlasic"); 
  expect(employee.github).toBe("katievlasic");
});

test("getRole method test", () => {
    const employee = new Engineer("Katie", 1, "test@gmail.com","katievlasic"); 
    expect(employee.getRole()).toBe("Engineer");
  });
test("getGithub method test", () => {
    const employee = new Engineer("Katie", 1, "test@gmail.com","katievlasic"); 
    expect(employee.getGithub()).toBe("katievlasic");
  });