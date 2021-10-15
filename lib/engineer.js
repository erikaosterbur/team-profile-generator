const Employee = require('./employee');

class Engineer extends Employee {
    constructor (responses){
        super(responses.name, responses.id, responses.email, "Engineer");
        this.gitHub = responses.gitHub;
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
    getGitHub(){
        return this.gitHub;
    }
}

module.exports = Engineer;