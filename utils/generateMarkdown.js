// TODO Create a function to generate markdown for README

function generateMarkdown(info) {
  return `

---
## Contents

1. [About](#about)
    1. [User Story](#user%20story)
    2. [Acceptance criteria](#acceptance%20criteria)
    3. [Visuals](#visuals)
    4. [Build](#build)
2. [Installation](#installation)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [Authors and acknowledgment](#authors%20and%20acknowledgment)
---  
  
# ${info.title}

  ${info.description}


  [View deployed version.](${info.URL})
  
## About

  ${info.about}

---

## User Story
  

---

## Acceptance Criteria
  
  
---
## Visuals:

  ![]()

---

## Installation:
  ${info.installation}

  To clone the repo:
  
      git clone ${info.clone}
  

---

## Contributing:
  
  To contribute to this application, create a pull request.
  Here are the steps needed for doing that:
  - Fork the repo
  - Create a feature branch (git checkout -b NAME-HERE)
  - Commit your new feature (git commit -m 'Add some feature')
  - Push your branch (git push)
  - Create a new Pull Request

  Following a code review, your feature will be merged.


---

## Tests:
  ${info.test}

---

## Authors and Acknowledgments
  ${info.author}

---

## Contact Information:
* GitHub Username: ${info.userName}
* GitHub Email: ${info.userEmail}
  
`;
}

module.exports = generateMarkdown;
