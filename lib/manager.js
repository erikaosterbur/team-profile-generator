const Employee = require('./employee');

class Manager extends Employee {
    constructor (responses){
        super(responses.name, responses.id, responses.email, 'Manager');
        this.officeNumber = responses.officeNumber;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole() {
        return this.role;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;