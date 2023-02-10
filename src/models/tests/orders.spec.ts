import { Order, ordersQueries } from "../order";

const order = new ordersQueries()

describe('currentOrder', () => {
    it('should return a value', async () => {
        const userId = '1';
        const result = await order.currentOrder(userId);
        expect(result).toBeDefined();
    });

    // it("should add a product to an order", async () => {
    //     const orderId = '1'
    //     const productId = 1;
    //     const quantity = 2;
    
    //     // @ts-ignore
    //     const result = await order.addProduct(productId, quantity, orderId);
  
    //     expect(result).toEqual({
    //       //   @ts-ignore
    //       product_id: productId,
    //       orderQuantity: quantity,
    //       order_id: orderId,
    //       id: 1
    //     });
    //   });

    it("should add a product to an order", async () => {
        const orderId = '1'
        const productId = '1';
        const orderQuantity = 20;
      
        // @ts-ignore
        const result = await order.addProduct(orderQuantity, productId, orderId);
      
        expect(result).toEqual({
          product_id: productId,
          //   @ts-ignore
          orderquantity: orderQuantity,
          order_id: orderId,
          id: 1
        });
      });
      
});
