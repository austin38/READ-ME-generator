// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
function promptUser () {
    return inquirer.prompt ([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },
        {
            type: "input",
            message: "Enter a description for your project(installation instructions, usage info, contribution guidelines, and test instructions):",
            name: "description",
        },
        {
            type: "input",
            message: "Enter your Github username:",
            name: "github"
        },
        {
            type: "input",
            message: "Please enter your email",
            name: "email"
        },
        {
            type: "list",
            message: "Which license does this project fall under?",
            name: "license",
            choices: [
                "MIT",
                "APACHE 2.0",
                "GPL 3.0",
                "BSD",
                "None",
            ],
        },
    ])
    }
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
