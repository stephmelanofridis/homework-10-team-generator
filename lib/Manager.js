// Import Employee.js and then extend to create Manager
const Employee = require("./Employee.js");

// Create Manager class extension
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
};

module.exports = Manager;