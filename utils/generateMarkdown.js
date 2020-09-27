const fs = require('fs');

// Helper Function | Table of Contents


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Project Description ${data.description}
## Created by ${data.name}
## Table of Contents
[Text](#Section)
## Description ${data.description}
## Languages Used ${data.languages}
## Installation ${data.installation}
## Usage ${data.usage}
## Additional Contributors ${data.contributors}
## Future Contributions ${data.future}
## Tests ${data.test}
## Licenses ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
## Questions
See ${data.name}'s other projects at https://github.com/${data.username}
Please contact ${data.name} with any questions at ${data.email}
`;
}

module.exports = generateMarkdown;


