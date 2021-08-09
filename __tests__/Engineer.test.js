const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
    describe("getName", () => {
        it("Should return name", () => {
            expect(new Engineer("Steph", 1, "stephmelanofridis@bigpond.com", "https://github.com/stephmelanofridis", "stephmelanofridis").getName()).toBe("Steph");
        });
    });

    describe("getId", () => {
        it("Should return id", () => {
            expect(new Engineer("Steph", 1, "stephmelanofridis@bigpond.com", "https://github.com/stephmelanofridis", "stephmelanofridis").getId()).toBe(1);
        });
    });

    describe("getEmail", () => {
        it("Should return email", () => {
            expect(new Engineer("Steph", 1, "stephmelanofridis@bigpond.com", "https://github.com/stephmelanofridis", "stephmelanofridis").getEmail()).toBe("stephmelanofridis@bigpond.com");
        });
    });

    describe("getGithub", () => {
        it("Should return github", () => {
            expect(new Engineer("Steph", 1, "stephmelanofridis@bigpond.com", "https://github.com/stephmelanofridis", "stephmelanofridis").getGithub()).toBe("https://github.com/stephmelanofridis");
        });
    });

});
