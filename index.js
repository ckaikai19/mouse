const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions").questions;
const writeFile = util.promisify(fs.writeFile);



// This function stores the answers, passes them to the generateMarkdown function then creates a new readme file
async function init() {
    const answers = await inquirer.prompt(questions);
    let readME = generateMarkdown(answers)
    writeFile("personal-readme.md", readME);
}


init();
