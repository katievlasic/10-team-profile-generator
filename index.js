const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

Employee.prototype.printCard = function () {
    console.log(
        `Name: ${this.name}\n ID: ${this.ID}\n `
      )
}