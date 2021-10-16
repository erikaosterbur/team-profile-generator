const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

let finalHTML = '';

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
        managerHTML(manager);
        if (responses.role === "Engineer"){
            askEngineerQuestions();
        }
        else if (responses.role === "Intern"){
            askInternQuestions();
        }
        else writeHTML(finalHTML);        
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
        engineerHTML(engineer);
        if (responses.role === "Engineer"){
            askEngineerQuestions();
        }
        else if (responses.role === "Intern"){
            askInternQuestions();
        }
        else writeHTML(finalHTML);
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
        internHTML(intern);
        if (responses.role === "Engineer"){
            askEngineerQuestions();
        }
        else if (responses.role === "Intern"){
            askInternQuestions();
        }
        else writeHTML(finalHTML);
    })
}

function managerHTML(manager){
    const managerName = manager.getName();
    const managerRole = manager.getRole();
    const managerId = manager.getId();
    const managerEmail = manager.getEmail();
    const managerOfficeNumber = manager.getOfficeNumber();
    let managerSection = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Our Team</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Our Team</h1>
        </div>
    </div>
    <div class="row d-flex justify-content-center">
        <div class="card col-sm-8 col-md-4 col-lg-3 m-3 p-4" style="width: 18rem;">
            <div class="card-header">${managerName}: ${managerRole}</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${managerId}</li>
                    <li class="list-group-item">Email: <a href="mailto:">${managerEmail}</a></li>
                    <li class="list-group-item">Office Number: ${managerOfficeNumber}</li>
                </ul>
        </div>
    `
    finalHTML += managerSection;
}

function engineerHTML(engineer){
    const engineerName = engineer.getName();
    const engineerRole = engineer.getRole();
    const engineerId = engineer.getId();
    const engineerEmail = engineer.getEmail();
    const engineerGitHub = engineer.getGitHub();
    let engineerSection = `
        <div class="card col-sm-8 col-md-4 col-lg-3 m-3 p-4" style="width: 18rem;">
            <div class="card-header">${engineerName}: ${engineerRole}</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineerId}</li>
                    <li class="list-group-item">Email: <a href="mailto:">${engineerEmail}</a></li>
                    <li class="list-group-item">GitHub Username: <a href="https://github.com/${engineerGitHub}" target="_blank">${engineerGitHub}</a></li>
                </ul>
        </div>
    `
    finalHTML += engineerSection;
}

function internHTML(intern){
    const internName = intern.getName();
    const internRole = intern.getRole();
    const internId = intern.getId();
    const internEmail = intern.getEmail();
    const internSchool = intern.getSchool();
    let internSection = `
        <div class="card col-sm-8 col-md-4 col-lg-3 m-3 p-4" style="width: 18rem;">
            <div class="card-header">${internName}: ${internRole}</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${internId}</li>
                    <li class="list-group-item">Email: <a href="mailto:">${internEmail}</a></li>
                    <li class="list-group-item">School: ${internSchool}</li>
                </ul>
        </div>
    `
    finalHTML += internSection;
}

function writeHTML(finalHTML){
    let closingTags = `
    </div>
</body>
</html>
    `
    finalHTML += closingTags;

    fs.writeFile("./dist/index.html", finalHTML, err => {
        err ? console.log("Error found, try again") : console.log("Success!")
        }
    )
}

function init(){
    askManagerQuestions();
}

init();
