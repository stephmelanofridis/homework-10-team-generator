const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    describe("getName", () => {
        it("Should return name", () => {
            expect(new Manager("Steph", 1, "stephmelanofridis@bigpond.com", 1).getName()).toBe("Steph");
        });
    });

    describe("getId", () => {
        it("Should return id", () => {
            expect(new Manager("Steph", 1, "stephmelanofridis@bigpond.com", 1).getId()).toBe(1);
        });
    });

    describe("getEmail", () => {
        it("Should return email", () => {
            expect(new Manager("Steph", 1, "stephmelanofridis@bigpond.com", 1).getEmail()).toBe("stephmelanofridis@bigpond.com");
        });
    });

    describe("getOfficeNumber", () => {
        it("Should return office number", () => {
            expect(new Manager("Steph", 1, "stephmelanofridis@bigpond.com", 5).getOfficeNumber()).toBe(1);
        })
    })
    describe("getRole", () => {
        it("Should return role", () => {
            expect(new Manager("Steph", 1, "stephmelanofridis@bigpond.com", 1).getRole()).toBe("Manager");
        });
    });

});