const fs = require("fs"); // fs = file system
const inquirer = require("inquirer"); // module package
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const renderCard = require("./lib/generateFile");

let varGlobal = [];
    
    // Function to write HTML file
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
            type: "input",
            name: "id",
            message: "What is the id of this Employee?",
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
            message: "What is the Engineer's github?",
            when: (answers) => answers.role === "Engineer"
        },
        {
            type: "input",
            name: "number",
            message: "What is the Manager's office phone number?",
            when: (answers) => answers.role === "Manager"
        },
        {
            type: "input",
            name: "school",
            message: "What is the Intern's school?",
            when: (answers) => answers.role === "Intern"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Employee's email?",
        },
    ])
    .then((answers) => {
        console.log(answers);
        if (answers.role === "Manager"){
            let varMan = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            varGlobal.push(varMan); 
    
        }
        else if (answers.role === "Engineer"){
            let varEn = new Engineer(answers.name, answers.id, answers.email, answers.github);
            varGlobal.push(varEn); 
    
        }
        else if (answers.role === "Intern"){
            let varIn = new Intern(answers.name, answers.id, answers.email, answers.school);
            varGlobal.push(varIn); 
    
        };
        createTeam();
    }).catch((error) => {
        if (error) {
            console.log(error);
        }
    });
};


// Function call to initialize CLI
init();


function createTeam(){
    inquirer.prompt([
        {
            type: "list",
            name: "end",
            message: "Do you want to add another team member?",
            choices: [
                "Yes, add another team member.",
                "No, build team profile."
            ]
        }
    ]
    ).then((answers) => {
        if(answers.end === "Yes, add another team member."){
            init()
        } else {
            const data = renderCard(varGlobal); // hand off array of team members 
            console.log(data);
            writeToFile('./dist/index.html', data);
        }
    });
}