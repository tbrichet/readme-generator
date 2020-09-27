const fs = require('fs');

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
## Creator
${data.name}
## Table of Contents  
[Description](#Description)  
[Languages](#Languages)  
[Installation](#Installation)  
[Usage](#Usage)  
[Additional Contributors](#Additional-Contributors)  
[Future-Contributions](#Future-Contributions)  
[Tests](#Tests)  
[Licenses](#Licenses)  
[Questions](#Questions)  
## Description
${data.description}
## Languages
${data.languages}
## Installation
${data.installation}
## Usage
${data.usage}
## Additional Contributors
${data.contributors}
## Future Contributions
${data.future}
## Tests
${data.test}
## Licenses
${data.license}
## Questions
See ${data.name}'s other projects at https://github.com/${data.username}.   
Please contact ${data.name} with any questions at ${data.email}.
`;
}

module.exports = generateMarkdown;


