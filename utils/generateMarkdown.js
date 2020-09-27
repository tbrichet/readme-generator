const fs = require('fs');

// Helper Function | Table of Contents


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
## Creator
${data.name}
## Table of Contents
[Questions](#Questions)
## Project Description
${data.description}
## Languages Used
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
See ${data.name}'s other projects at https://github.com/${data.username}
Please contact ${data.name} with any questions at ${data.email}
`;
}

module.exports = generateMarkdown;


