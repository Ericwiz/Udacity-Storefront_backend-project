"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersQueries = void 0;
// @ts-ignore
const database_1 = __importDefault(require("../database"));
class ordersQueries {
    async currentOrder(userId) {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = `SELECT id, user_id, product_id, status FROM orders WHERE user_id = ($1) AND status = 'active' `;
            const result = await conn.query(sql, [userId]);
            conn.release();
            return result.rows;
        }
        catch (error) {
            throw new Error(`${error}`);
        }
    }
}
exports.ordersQueries = ordersQueries;
