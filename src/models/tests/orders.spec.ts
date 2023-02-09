import { Order, OrderStore } from "../order"
const order = new OrderStore()

describe("Test for all the order models and endpoints", () => {
    describe("test for the order models", () => {
        it("expect an index method to be defined", () => {
            expect(order.index).toBeDefined()
        })

        it("expect an show method to be defined", () => {
            expect(order.show).toBeDefined()
        })

        it("expect an createProduct method to be defined", () => {
            expect(order.createOrder).toBeDefined()
        })
        it('should Create a new order', async () => {
            const newOrder: Order = {
                quantity: 2,
                product_id: "1", 
                user_id: "1",
                status: "complete"
            }
            const myOrder = await order.createOrder(newOrder);

            expect(myOrder).toEqual({
                id: 1,
                quantity: 2,
                product_id: "1", 
                user_id: "1",
                status: "complete"
            })
        })

        it("Should return a list of orders", async() => {
            const myOrder = await order.index()
            expect(myOrder).toEqual([{
                id: 1,
                quantity: 2,
                product_id: "1", 
                user_id: "1",
                status: "complete"
            }])
        })

        it("Should return an order", async() => {
            const myOrder = await order.show('1')
            expect(myOrder).toEqual({
                id: 1,
                quantity: 2,
                product_id: "1", 
                user_id: "1",
                status: "complete"
            })
        })
    })
})