const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    describe("getName", () => {
        it("Should return name", () => {
            expect(new Employee("Steph", 1, "stephmelanofridis@bigpond.com").getName()).toBe("Steph");
        });
    });

    describe("getId", () => {
        it("Should return id", () => {
            expect(new Employee("Steph", 1, "stephmelanofridis@bigpond.com").getId()).toBe(1);
        });
    });

    describe("getEmail", () => {
        it("Should return email", () => {
            expect(new Employee("Steph", 1, "stephmelanofridis@bigpond.com").getEmail()).toBe("stephmelanofridis@bigpond.com");
        });
    });

    describe("getRole", () => {
        it("Should return role", () => {
            expect(new Employee("Steph", 1, "stephmelanofridis@bigpond.com").getRole()).toBe("Employee");
        });
    });
});

