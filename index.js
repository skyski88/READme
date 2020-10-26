const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const util = require('util')
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user
const questions = ([
    {
        type: "input",
        name: "Github",
        message: "What is your github username?"
    },


    {
        type: 'input',
        message: 'What is your email address?',
        name: 'EMail',
    },

    {
        type: 'input',
        message: 'What is your project repo?',
        name: 'Repository',
    },

    {
        type: 'input',
        message: 'What is your project title?',
        name: 'Title',
    },

    {
        type: 'input',
        message: 'What is your project description?',
        name: 'Description',
    },

    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'Installation',
    },

    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'Usage',
    },

    {
        type: 'input',
        message: 'What are your contribution guidelines?',
        name: 'Guidelines',
    },

    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'Instructions',
    },

    {
        type: 'list',
        message: 'What is your license?',
        name: 'License',
        choices: [
            "ISC",
            "MIT",
            "Apache",
            "GPL 3.0"
        ]
    }
])



// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function (response) {
        console.log(response)
        writeToFile("README.md", generateMarkdown(response));

    })
    
    // call the function writeToFile using the data that we pass (ie the inquirer responses)
}

    // function to write README file
    function writeToFile(fileName, data) {
        return fs.writeFileSync(path.join(process.cwd(), fileName), data)
        
    }

    
// function call to initialize program
init();


    