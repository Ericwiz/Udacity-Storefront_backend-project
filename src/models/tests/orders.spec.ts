import { Order, ordersQueries } from "../order";

const order = new ordersQueries()

describe('currentOrder', () => {
    it('should return a value', async () => {
        const userId = '1';
        const result = await order.currentOrder(userId);
        expect(result).toBeDefined();
    });
});
