// array of questions for user
const questions = [
  {
    type: "input",
    name: "author",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "userEmail",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    message: "Description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "More about your project:",
    name: "about",
  },
  {
    type: "input",
    message: "What are the installation instructions for your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the link to clone the repo?",
    name: "clone",
  },
  {
    type: "input",
    message: "Please enter any testing protocols you used for your project?",
    name: "test",
  },
  {
    type: "input",
    name: "URL",
    message: "What is the URL of the live site?",
  },
  {
    type: "input",
    name: "repo",
    message: "What is the URL of the github repo?",
  },
];



module.exports = {
  questions: questions,
};
