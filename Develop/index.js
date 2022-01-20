const inquirer = require("inquirer");
const { writeFile } = require("fs");
const generator = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input

const questions = [
        {
            type: "input",
            name: "githubUsername",
            message: "What is your GitHub username?",
        },
        {
            type: "input",
            name: "title",
            message: "What is the name of the project?",
        },
        {
            type: "input",
            name: "link",
            message: "What is the link to the repository?",
        },
        {
            type: "checkbox",
            name: "technologies",
            message: "What technologies (if any) were used in this project?",
            choices: ["HTML", "CSS", "JavaScript", "NPM", "Mongo", "Express", "SQL"]
        },
        {
            type: "input",
            name: "install",
            message: "How can you install this project?",
        },
        {
            type: "editor",
            name: "instructions",
            message: "Provide some instructions on how to use your application."
        },
        {
            type: "input",
            name: "description",
            message: "What is a good, short description of this project?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the best email to reach you at?",
        },
        {
            type: 'rawlist',
            name: 'license',
            message: 'Which license is this project going to use?',
            choices: ['MIT License', 'Apache 2.0 License', 'GNU General Public License', 'Creative Commons', 'none']
        },
        {
            type: 'input',
            name: 'fileName',
            message: 'What is the name of the file?',
            default: 'README',
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let content = generator(data)
    writeFile(`./dist/${fileName.trim()}.md`, content, () => console.log(`${fileName.trim()} has been created successfully!`))
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(({ fileName, ...readMeData}) => {
            writeToFile(fileName, readMeData)
        })
        .catch((error) => console.log(error));
};

// Function call to initialize app

init();
