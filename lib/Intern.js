// Import Employee.js and then extend to create Intern
const Employee = require("./Employee.js");

// Create Intern class extension
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
};

module.exports = Intern;

