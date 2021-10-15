const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

function askManagerQuestions(){
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the team manager's ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the team manager's email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the team manager's office number?",
            name: 'officeNumber',
        },
        {
            type: 'list',
            message: 'What type of team member would you like to add?',
            name: 'role',
            choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        },
    ])
    .then(responses => {
        const manager = new Manager (responses);
        console.log(manager);
        const managerSection = `
        
        `
        if (responses.role === "Engineer"){
            askEngineerQuestions();
        }
        else if (responses.role === "Intern"){
            askInternQuestions();
        }
        else return          
    })
}

function askEngineerQuestions(){
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your engineer's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is your engineer's ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is your engineer's email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is your engineer's GitHub username?",
            name: 'gitHub',
        },
        {
            type: 'list',
            message: 'What type of team member would you like to add?',
            name: 'role',
            choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        },
    ])
    .then(responses => {
        const engineer = new Engineer (responses);
        console.log(engineer);
        
        if (responses.role === "Engineer"){
            askEngineerQuestions();
        }
        else if (responses.role === "Intern"){
            askInternQuestions();
        }
        else return
    })
}

function askInternQuestions(){
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your intern's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is your intern's ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is your intern's email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is your intern's school name?",
            name: 'school',
        },
        {
            type: 'list',
            message: 'What type of team member would you like to add?',
            name: 'role',
            choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        },
    ])
    .then(responses => {
        const intern = new Intern (responses);
        console.log(intern);
        if (responses.role === "Engineer"){
            askEngineerQuestions();
        }
        else if (responses.role === "Intern"){
            askInternQuestions();
        }
        else return
    })
}

function init(){
    askManagerQuestions();
}

init();