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
        let managerSection = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">${manager.name}</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: ${manager.email}</li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
        </div>
        `
        finalHTML(managerSection);
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
        let engineerSection = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">${engineer.name}</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: ${engineer.email}</li>
                    <li class="list-group-item">GitHub Username: ${engineer.gitHub}</li>
                </ul>
        </div>
        `
        finalHTML(engineerSection);
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
        let internSection = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">${intern.name}</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: ${intern.email}</li>
                    <li class="list-group-item">GitHub Username: ${intern.gitHub}</li>
                </ul>
        </div>
        `
        finalHTML(internSection);
        if (responses.role === "Engineer"){
            askEngineerQuestions();
        }
        else if (responses.role === "Intern"){
            askInternQuestions();
        }
        else return
    })
}

function finalHTML(managerSection, engineerSection, internSection){
    let finalHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Our Team</title>
</head>
<body>
    ${managerSection}

    ${engineerSection}

    ${internSection}

    
</body>
</html>
    
    `
    generateHTML(finalHTML);
}

function generateHTML(finalHTML){
    fs.writeFile("./dist/index.html", finalHTML, err => {
        err ? console.log("Error found, try again") : ("Success!")
        }
    )
}

function init(){
    askManagerQuestions();
}

init();

