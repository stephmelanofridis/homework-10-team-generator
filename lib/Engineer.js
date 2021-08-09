// Import Employee.js and then extend to create Engineer
const Employee = require("./Employee.js");

// Create Engineer class extension
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer;