// Variables
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title for your project.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "name",
        message: "What is your name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please write a brief description of your project. (Required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please include a project description.');
                return false;
            }
        }
    },
    {
        type: "checkbox",
        name: "languages",
        message: "What languages did you use to create your project? (Optional) Please check all that apply.",
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for users wishing to view/use your project? (Required)",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please include installation instructions.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "What are the instructions for use? (Required) Include examples as necessary.",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please include usage instructions.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contributors",
        message: "Please list the names of any additional project contributors. (Optional)",
    },
    {
        type: "input",
        name: "future",
        message: "Please include guidelines for future contributors to follow. (Optional)",
    },
    {
        type: "input",
        name: "test",
        message: "Please include any tests for your application and examples on how to run them. (Optional)"
    },
    {
        type: "list",
        name: "license",
        message: "If you would like to add a license to your README, please select one from the list below. (Optional)",
        choices: ['Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Open Data Commons', 'Perl', 'SIL', 'Unlicense', 'WTFPL', 'Zlib']
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username? (Required)",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your Github username.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address? (Required)",
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please enter your email address.');
                return false;
            }
        }
    }
];

// function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
        console.log('README file created!');
    });
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
        writeToFile('./generated-readme/README.md', generateMarkdown({...answers})
    )});
};

// function call to initialize program
init();
