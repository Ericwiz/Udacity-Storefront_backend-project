"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../users");
const user = new users_1.UsersStore();
describe("Test for all the user models and endpoints", () => {
    describe("test for the user models", () => {
        it("expect an index method to be defined", () => {
            expect(user.index).toBeDefined();
        });
        it("expect an show method to be defined", () => {
            expect(user.show).toBeDefined();
        });
        it("expect an createUser method to be defined", () => {
            expect(user.createUser).toBeDefined();
        });
        it('should Create a user', async () => {
            const newUser = {
                firstname: "Wisdom",
                lastname: "Agu",
                password: "agu001"
            };
            const myUser = await user.createUser(newUser);
            expect(myUser).toEqual({
                id: 1,
                firstname: "Wisdom",
                lastname: "Agu",
                password: "agu001"
            });
        });
        it("Should return a list of users", async () => {
            const myUser = await user.index();
            expect(myUser).toEqual([{
                    id: 1,
                    firstname: "Wisdom",
                    lastname: "Agu",
                    password: "agu001"
                }]);
        });
        it("Should return a users", async () => {
            const myUser = await user.show('1');
            expect(myUser).toEqual({
                id: 1,
                firstname: "Wisdom",
                lastname: "Agu",
                password: "agu001"
            });
        });
    });
});
