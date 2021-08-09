const Intern = require("../lib/Intern.js");

decribe("Intern", () => {
    describe("getName", () => {
        it("Should return name", () => {
            expect(new Intern("Steph", 1, "stephmelanofridis@bigpond.com", "University of Sydney").getName()).toBe("Steph");
        });
    });

    describe("getId", () => {
        it("Should return id", () => {
            expect(new Intern("Steph", 1, "stephmelanofridis@bigpond.com", "University of Sydney").getId()).toBe(1);
        });
    });

    describe("getEmail", () => {
        it("Should return email", () => {
            expect(new Intern("Steph", 1, "stephmelanofridis@bigpond.com", "University of Sydney").getEmail()).toBe("stephmelanofridis@bigpond.com");
        });
    });

    describe("getSchool", () => {
        it("Should return school", () => {
            expect(new Intern("Steph", 1, "stephmelanofridis@bigpond.com", "University of Sydney").getSchool()).toBe("University of Sydney");
        });
    });

    describe("getRolel", () => {
        it("Should return role", () => {
            expect(new Intern("Steph", 1, "stephmelanofridis@bigpond.com", "University of Sydney").getRole()).toBe("Intern");
        });
    });

});