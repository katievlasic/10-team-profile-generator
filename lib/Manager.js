const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager"
    } // this method now overrides the employee method getRole()
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;