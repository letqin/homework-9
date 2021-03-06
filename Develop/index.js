// // TODO: Include packages needed for this application
const inquirer = require('inquirer')
const { writeFile } = require('fs')
const generator = require('./utils/generateMarkdown')

// // TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?'
  },
  {
    type: 'input',
    name: 'link',
    message: 'What is the link to the demo?'
  },
  {
    type: 'checkbox',
    name: 'technologies',
    message: 'Which technologies did you use to build this project? Check all that apply.',
    choices: ['JavaScript', 'CSS', 'HTML', 'NodeJS', 'Express.js', 'Jest']
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What commands need to be run in order to use your application?'
  },
  {
    type: 'editor',
    name: 'instructions',
    message: 'Provide some instructions on how to use your application.'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of the application.'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
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



// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let content = generator(data)
  writeFile(`./Develop/${fileName.trim()}.md`, content, () => console.log(`${fileName.trim()} generated successfully.`))
}

// // TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(({ fileName, ...readMeData }) => {
      writeToFile(fileName, readMeData)
    })
    .catch((error) => console.log(error));
}

// Function call to initialize app
init();
