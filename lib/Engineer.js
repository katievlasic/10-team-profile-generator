const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
    }
    getRole(){
        return "Engineer"
    } // this method now overrides the employee method getRole()
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;