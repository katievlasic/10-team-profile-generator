const fs = require("fs"); // fs = file system
const inquirer = require("inquirer"); // module package
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

Employee.prototype.printCard = function () {
    console.log(
        `Name: ${this.name}\n ID: ${this.ID}\n `
      )
}

// Function to write HTMLfile
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Sucess!")
    );
  };

function init() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of the Employee?",
        },
        {
            type: "list",
            name: "role",
            message: "What is the role of this Employee?",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
            ],
        },
        {
            type: "input",
            name: "github",
            message: "What is the Employee's github?",
          },
        {
            type: "input",
            name: "email",
            message: "What is the Employee's email?",
          },
        ])
          .then((answers) => {
            console.log(answers);
            // const data = generateMarkdown(answers);
            // writeToFile('./dist/README.md', data);
          }).catch((error) => {
            if (error) {
              console.log(error);
            }
          });
      };

// Function call to initialize app
init();