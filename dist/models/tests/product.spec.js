"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../product");
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
const request = (0, supertest_1.default)(server_1.default);
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjc1OTM2ODAzfQ.9mtebwHfUa5FC82x_P70eBVvF7UrFw-C1E2v-xOmgYI";
const product = new product_1.ProductStore();
describe("Test for all the product models and endpoints", () => {
    describe("test for the product models", () => {
        it("expect an index method to be defined", () => {
            expect(product.index).toBeDefined();
        });
        it("expect an show method to be defined", () => {
            expect(product.show).toBeDefined();
        });
        it("expect an createProduct method to be defined", () => {
            expect(product.createProduct).toBeDefined();
        });
        it('should Create a product', async () => {
            const newUser = {
                name: "T-shirt",
                price: "50.00",
                category: "clothes"
            };
            const myUser = await product.createProduct(newUser);
            expect(myUser).toEqual({
                id: 1,
                name: "T-shirt",
                price: "50.00",
                category: "clothes"
            });
        });
        it("Should return a list of products", async () => {
            const myUser = await product.index();
            expect(myUser).toEqual([{
                    id: 1,
                    name: "T-shirt",
                    price: "50.00",
                    category: "clothes"
                }]);
        });
        it("Should return a products", async () => {
            const myUser = await product.show('1');
            expect(myUser).toEqual({
                id: 1,
                name: "T-shirt",
                price: "50.00",
                category: "clothes"
            });
        });
    });
});
describe('It should test all Endpoints', () => {
    it('expects /products to be 200', async () => {
        const response = await request.get('/products');
        expect(response.status).toBe(200);
    });
    it('expects /products to create a new user', async () => {
        const newProduct = {
            name: "Shoes",
            price: "29.99",
            category: "clothes"
        };
        const response = await request.post('/products')
            .set("Content-Type", "application/json").set("Authorization", `Bearer ${token}`)
            .send(newProduct);
        expect(response.status).toBe(200);
    });
    it('expects /products/:id to be 200', async () => {
        const response = await request.get('/products/1');
        expect(response.status).toBe(200);
    });
});
