const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = (answers) =>

// TODO: Create an array of questions for user input

inquirer
    .prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the name of your project?",
        },
        {
            type: "input",
            name: "name",
            message: "What was your motivation for the project?",
        },
        {
            type: "input",
            name: "name",
            message: "Why did you build this project?",
        },
        {
            type: "input",
            name: "name",
            message: "What problem is this project solving?",
        },
        {
            type: "input",
            name: "name",
            message: "What did you learn?",
        },
        {
            type: "input",
            name: "name",
            message: "What makes your project stand out?",
        },
        {
            type: "input",
            name: "name",
            message: "What challenges did you come across?",
        },
        {
            type: "input",
            name: "name",
            message: "What is the link to the live deployment/ GitHub repository link?",
        },   
]);

// TODO: Create a function to write README file
fs.writeFile("README.MD", )
// Display above questions in the console

// Wait for user input via the command line


function writeToFile(fileName, data) {
    let fileName = fileName;
    let 
};

// TODO: Create a function to initialize app

function init() {};

// Function call to initialize app

init();
