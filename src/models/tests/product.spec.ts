import { Product, ProductStore } from "../product"
const product = new ProductStore()

describe("Test for all the product models and endpoints", () => {
    describe("test for the product models", () => {
        it("expect an index method to be defined", () => {
            expect(product.index).toBeDefined()
        })

        it("expect an show method to be defined", () => {
            expect(product.show).toBeDefined()
        })

        it("expect an createProduct method to be defined", () => {
            expect(product.createProduct).toBeDefined()
        })
        it('should Create a product', async () => {
            const newUser: Product = {
                name: "T-shirt",
                price: "50.00", 
                category: "clothes"
            }
            const myUser = await product.createProduct(newUser);

            expect(myUser).toEqual({
                id: 1,
                name: "T-shirt",
                price: "50.00", 
                category: "clothes"
            })
        })

        it("Should return a list of products", async() => {
            const myUser = await product.index()
            expect(myUser).toEqual([{
                id: 1,
                name: "T-shirt",
                price: "50.00", 
                category: "clothes"
            }])
        })

        it("Should return a products", async() => {
            const myUser = await product.show('1')
            expect(myUser).toEqual({
                id: 1,
                name: "T-shirt",
                price: "50.00", 
                category: "clothes"
            })
        })
    })
})