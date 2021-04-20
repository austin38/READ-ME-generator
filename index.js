// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Enter a description for your project:",
            name: "description"
        },
        {
            type: "input",
            message: "Enter installation instructions as a comma separated list:",
            name: "install"
        },
        {
            type: "input",
            message: "Enter usage information for your project:",
            name: "usage"
        },
        {
            type: "input",
            message: "Enter contribution guirelines for your project:"
            name: "contribution"
        }
    ])
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
