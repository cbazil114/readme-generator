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
        type:"list",
        name:"license",
        message:"Which license is your project under?",
        choices: ["GNU", "MIT", "ISC", "Apache2.0", "None"],
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
