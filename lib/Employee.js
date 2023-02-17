// parent class
class Employee {
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email; // parameters declared
    }
    getName() {
        return this.name;
    }
    getRole() {
        return "employee"
    }; // returns 'Employee' as a string!
    // child class will have same exact method getRole() and will override 
    // class Manager extends Employee ---> needed for getRole()!
    
    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }
}


module.exports = Employee;