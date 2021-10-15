const Employee = require('./employee');

class Engineer extends Employee {
    constructor (responses){
        super(responses.name, responses.id, responses.email);
        this.gitHub = responses.gitHub;
    }

    getRole() {
        return "Engineer";
    }
    getGitHub(){
        return this.gitHub;
    }
}

module.exports = Engineer;