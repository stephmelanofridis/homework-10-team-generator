// Declare variables
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");
const responseArr = [];

const Manager = require("./lib/Manager.js");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// Create functions that can be used to validate input
const inputValidation = (input) => {
    if (input.length === 0) {
        return "Please enter details required to continue. "
    } else {
        return true;
    }
};

const numberValidation = (input) => {
    if (isNaN(input)) {
        return "Please enter a number to continue. ";
    } else {
        return true;
    }
};

const emailValidator = (input) => {
    if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(input)) {
        return true;
    } else {
        return "Please enter a valid email address. "
    }
};


// General questions all staff are asked
const generalQuestions = [{
    type: "input",
    name: "name",
    message: "Please enter your name: ",
    validate: inputValidation,
},
{
    type: "input",
    name: "id",
    message: "Please enter your Employee ID: ",
    validate: numberValidation,
},
{
    type: "input",
    name: "email",
    message: "Please enter your email address: ",
    validate: emailValidator,
}];

// Questions specific to manager, engineer or intern
const forManager = {
    type: "input",
    name: "officeNumber",
    message: "Please enter Managers Office Number: ",
    validate: numberValidation,
};

const forEngineer = {
    type: "input",
    name: "github",
    message: "What is your GitHub username? ",
    validate: inputValidation,
};

const forIntern = {
    type: "input",
    name: "school",
    message: "Please enter school intern attended: ",
    validate: inputValidation,
};

// Prompt the user to add more staff or continue
const staffAdditions = [{
    type: "list",
    name: "role",
    message: "Would you like to add another employee? ",
    choices: [
        "Engineer",
        "Intern",
        "No more employees, continue to creating HTML document."
    ]
}];

const compileStaff = () => {
    inquirer.prompt(staffAdditions)
        .then((data) => {
            if (data.role === "Engineer") {
                engineerQuestions();
            } else if (data.role === "Intern") {
                internQuestions();
            } else {
                writeToFile("./dist/myteam.html", generateHTML(responseArr));
            }
        });
};

const engineerQuestions = () => {
    inquirer.prompt([...generalQuestions, forEngineer])
        .then((data) => {
            let engineer = new Engineer(data.name, data.id, data.email, data.github)
            engineer.role = engineer.getRole();
            console.log(`${engineer.name} has been added to the team as an engineer\n`);
            responseArr.push(engineer);
            compileStaff();
        });
};

const internQuestions = () => {
    inquirer.prompt([...generalQuestions, forIntern])
        .then((data) => {
            let intern = new Intern(data.name, data.id, data.email, data.school);
            intern.role = intern.getRole();
            console.log(`${intern.name} has been added to the team as an intern\n`);
            responseArr.push(intern);
            compileStaff();
        });
};

// Function to run the program
const init = () => {
    inquirer.prompt([...generalQuestions, forManager])
        .then((data) => {
            let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            manager.role = manager.getRole();
            console.log(`${manager.name} has been added to the team as the manager\n`);
            responseArr.push(manager);
            compileStaff();
        })
}

// Write file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, err => {
        if (err) {
            throw err;
        }
        console.log("File has been successfully created. ")
    });
};

// Call to run the program
init();








