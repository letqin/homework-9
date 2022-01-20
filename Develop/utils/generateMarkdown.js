// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    case 'Apache 2.0 License':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
    case 'Creative Commons': 
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)]`
    case 'GNU General Public License':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    case 'none':
      return ''
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT License':
      return `(https://opensource.org/licenses/MIT)`
    case 'Apache 2.0 License':
      return `(https://opensource.org/licenses/Apache-2.0)`
    case 'Creative Commons':
      return `(http://creativecommons.org/publicdomain/zero/1.0/)`
    case 'GNU General Public License':
      return `(https://www.gnu.org/licenses/gpl-3.0)`
    case 'none':
      return ''
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT License':
      return `### License

${renderLicenseBadge(license) + renderLicenseLink(license)}
      `
    case 'Apache 2.0 License':
      return `### License
${renderLicenseBadge(license) + renderLicenseLink(license)}
      `
    case 'Creative Commons':
      return `### License
${renderLicenseBadge(license) + renderLicenseLink(license)}
      `
    case 'GNU General Public License':
      return `### License
${renderLicenseBadge(license) + renderLicenseLink(license)}
      `
    case 'none':
      return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ githubUsername, title, link, technologies, installation, instructions, description, email, license }) {

  let linkSection = () => {
    if (link.trim() === '') return linkSection = `[Link to demo](${link})`
    else return linkSection = ''

  }

  let techSection = () => {
    let text = ``
    console.log(technologies)
    for (let tech of technologies) {
      text += `  - ${tech}\n`
    }
    return text
  }
  let x = `# ${title} 
${description} 
${renderLicenseSection(license)}
  ### Table of Contents
  - [Technologies Used](#tech)
  - [Installation](#installation) 
  - [Usage](#usage) 
  - [Contributing](#contributing) 
  - [Tests](#tests)
  - [Contact Me](#contact-me)
  
  ### <a id="tech"></a> Technologies Used
---
${techSection()}
  ### <a id="installation"></a> Installation 
  - Clone to machine
  - Run \`${installation.trim()}\` to run script.
  ### <a id="usage"></a> Usage
${linkSection()}
${instructions}
  ### <a id="tests"></a> Tests
  Coming soon...
  ### <a id="contact-me"></a> Contact Me
  If you have any questions. You can reach me at [my Github](https://www.github.com/${githubUsername}) or you can email me at: ${email}.
  

 `
  return x;
}

module.exports = generateMarkdown;
