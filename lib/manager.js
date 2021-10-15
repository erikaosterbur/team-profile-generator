const Employee = require('./employee');

class Manager extends Employee {
    constructor (responses){
        super(responses.name, responses.id, responses.email, 'Manager');
        this.officeNumber = responses.officeNumber;
    }
    getName(responses){
        return responses.name;
    }
    getId(responses){
        return responses.id;
    }
    getEmail(responses){
        return responses.email;
    }
    getRole() {
        return responses.role;
    }
    getOfficeNumber(){
        return responses.officeNumber;
    }
}

module.exports = Manager;