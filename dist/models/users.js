"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.UsersStore = void 0;
// import client module from database.ts
// @ts-ignore
var database_1 = __importDefault(require("../database"));
// import bcrypt library
var bcrypt_1 = __importDefault(require("bcrypt"));
// import dotenv library
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
// get the environment viarables from the env file
var pepper = process.env.BCRYPT_PASSWORD;
var saltRounds = process.env.SALT_ROUNDS;
var env = process.env.ENV;
// Create a model class for the models
var UsersStore = /** @class */ (function () {
    function UsersStore() {
    }
    UsersStore.prototype.index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sql, conn, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        sql = 'SELECT * FROM users';
                        return [4 /*yield*/, database_1["default"].connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query(sql)];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error("Could not get users. Error: ".concat(error_1));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UsersStore.prototype.show = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, conn, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        sql = 'SELECT * FROM users WHERE id = ($1)';
                        return [4 /*yield*/, database_1["default"].connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query(sql, [id])];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error("Could not get the user with id ".concat(id, ". Error: ").concat(error_2));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UsersStore.prototype.createUser = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, conn, hash, result_1, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        sql = 'INSERT INTO users (firstname, lastname, password) VALUES($1, $2, $3) RETURNING *';
                        return [4 /*yield*/, database_1["default"].connect()];
                    case 1:
                        conn = _a.sent();
                        if (!(env === 'dev')) return [3 /*break*/, 3];
                        hash = bcrypt_1["default"].hashSync(u.password + pepper, parseInt(saltRounds));
                        return [4 /*yield*/, conn.query(sql, [u.firstname, u.lastname, hash])];
                    case 2:
                        result_1 = _a.sent();
                        conn.release();
                        return [2 /*return*/, result_1.rows[0]];
                    case 3: return [4 /*yield*/, conn.query(sql, [u.firstname, u.lastname, u.password])];
                    case 4:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows[0]];
                    case 5:
                        error_3 = _a.sent();
                        throw new Error("Cannot create new user ".concat(u.firstname, ": Error: ").concat(error_3));
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // async updateUser(u:User): Promise<User> {
    //     try {
    //         const sql = 'UPDATE users SET (firstname, lastname, password) = ($1, $2, $3) WHERE id = ($4) RETURNING *';
    //         // @ts-ignore
    //         const  conn = await client.connect()
    //         if(env === "dev") {
    //             // @ts-ignore
    //             const hash = bcrypt.hashSync(u.password+pepper, parseInt(saltRounds))
    //             const result = conn.query(sql, [u.firstname, u.lastname, hash, u.id])
    //             conn.release()
    //             return result.rows[0]
    //         }
    //         const result = conn.query(sql, [u.firstname, u.lastname, u.password, u.id])
    //         conn.release()
    //         return result.rows[0]
    //     } catch (error) {
    //         throw new Error(`Could not update user with id ${u.id}: ${error}`)
    //     }
    // }
    UsersStore.prototype.addProduct = function (productId, quantity, userId, status) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, conn, result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        sql = 'INSERT INTO orders (product_id, quantity, user_id, status) VALUES($1, $2, $3, $4) RETURNING *';
                        return [4 /*yield*/, database_1["default"].connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query(sql, [productId, quantity, userId, status])];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        error_4 = _a.sent();
                        throw new Error("Could not add product ".concat(productId, " to order r: ").concat(error_4));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UsersStore;
}());
exports.UsersStore = UsersStore;
