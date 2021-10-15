const Employee = require('./employee');


class Intern extends Employee {
    constructor (responses){
        super(responses.name, responses.id, responses.email, "Intern");
        this.school = responses.school;
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
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;