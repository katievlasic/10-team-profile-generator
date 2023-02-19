const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
    }
    getSchool(){
        return "School"
    } // this method now overrides the employee method getRole()
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;