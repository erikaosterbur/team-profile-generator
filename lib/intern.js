const Employee = require('./employee');


class Intern extends Employee {
    constructor (responses){
        super(responses.name, responses.id, responses.email);
        this.school = responses.school;
    }
    getRole() {
        return "Intern";
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;