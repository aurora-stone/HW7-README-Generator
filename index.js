const fs = require('fs');
const inquirer = require('inquirer');

// questions
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter the name of your app:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter your description of the app:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter how to install the app:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter how to use the app:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Enter any licenses used for the app:',
    choices: ["MIT", "Apache", "GNU"]
  },
  {
    type: 'input',
    name: 'features',
    message: 'Enter any features of the app:'
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Enter how to contribute to the app:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How do you run the tests for the app:'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email:'
  },
];

// generate readme
function generateREADME(answers) {
  return `# ${answers.name} ![${answers.license}](https://img.shields.io/badge/license-${answers.license}-green)


## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Features](#features)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)


## Installation
${answers.installation}
## Usage
${answers.usage}
## License
${answers.license}
## Features
${answers.features}
## Contributions
${answers.contributions}
## Tests
${answers.tests}
## Questions
www.github.com/${answers.github}
${answers.email}
  `;
}

// user input
inquirer.prompt(questions)
  .then(answers => {
    const READMEContent = generateREADME(answers);

    // Write the README file
    fs.writeFile('./output/README.md', READMEContent, err => {
      if (err) {
        console.error(err);
      } else {
        console.log('your README is done');
      }
    });
  })
  .catch(error => {
    console.error(error);
  });
