const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown");
const path = require("path");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"Provide a title for your project.",
    },
    {
        type:"input",
        name:"description",
        message:"Provide a brief description of your project.",
    },
    {
        type:"input",
        name:"installation",
        message:"What is the installation process for the application?",
    },
    {
        type:"input",
        name:"usage",
        message:"How do you use the application?",
    },
    {
        type:"list",
        name:"license",
        message:"Which license is your project under?",
        choices: ["GNU", "MIT", "ISC", "Apache2.0", "None"],
    },
    {
        type:"input",
        name:"contributing",
        message:"How can someone contribute to the application?",
    },
    {
        type:"input",
        name:"tests",
        message:"How do I test the application?",
    },
    {
        type:"input",
        name:"github",
        message:"What is your GitHub username?",
    },
    {
        type:"input",
        name:"email",
        message:"What is your email address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions)
    .then((answers) => {
        writeToFile("README.md",generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();
