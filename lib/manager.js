const Employee = require('./employee');

class Manager extends Employee {
    constructor (responses){
        super(responses.name, responses.id, responses.email);
        this.officeNumber = responses.officeNumber;
    }
   
    getRole() {
        return "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;