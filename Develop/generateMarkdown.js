// TODO: Create a function that returns a license badge based on which license is passed in

function whichBadge(license) {
  let licenseType
};

// If there is no license, return an empty string

function renderLicenseBadge(license) {

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {};

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `
    # Project Title 
    ${data.title}
    ## Motivation
    ${data.motivation}
    ## Why It Was Made
    ${data.why}
    ## What Problem It Solves
    ${data.problemSolved}
    ## What I Learned
    ${data.whatWasLearned}
    ## What Makes This Stand Out
    ${data.standOut}
    ## What Challenges Were Overcome
    ${data.challenges}

`;
};

module.exports = generateMarkdown;