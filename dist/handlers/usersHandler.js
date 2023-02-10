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
exports.addProductToAnOrder = exports.verificationToken = exports.createUser = exports.showUser = exports.usersIndex = void 0;
var users_1 = require("../models/users");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config;
var user = new users_1.UsersStore();
// Get all users
var usersIndex = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var myUsers, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, user.index()];
            case 1:
                myUsers = _a.sent();
                res.json(myUsers);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(403).json(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.usersIndex = usersIndex;
// Get a single user
var showUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var myUser, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, user.show(req.params.id)];
            case 1:
                myUser = _a.sent();
                res.json(myUser);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(403).json(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.showUser = showUser;
// Create new user
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newUser, myUser, token, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newUser = {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    password: req.body.password
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user.createUser(newUser)];
            case 2:
                myUser = _a.sent();
                token = jsonwebtoken_1["default"].sign({ user: myUser }, process.env.TOKEN_SECRET);
                res.json(token);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                res.status(403).json(error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
// @ts-ignore
var verificationToken = function (req, _res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var authorizationHeader, token;
    return __generator(this, function (_a) {
        try {
            authorizationHeader = req.headers.authorization;
            token = authorizationHeader === null || authorizationHeader === void 0 ? void 0 : authorizationHeader.split(' ')[1];
            // @ts-ignore
            jsonwebtoken_1["default"].verify(token, process.env.TOKEN_SECRET);
            next();
        }
        catch (error) {
            throw new Error("".concat(error));
        }
        return [2 /*return*/];
    });
}); };
exports.verificationToken = verificationToken;
var addProductToAnOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var quantity, userId, productId, status, addedProduct, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                quantity = parseInt(req.body.quantity);
                userId = req.params.id;
                productId = req.body.product_id;
                status = req.body.status;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user.addProduct(productId, quantity, userId, status)];
            case 2:
                addedProduct = _a.sent();
                res.json(addedProduct);
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                res.json(error_4);
                throw new Error("".concat(error_4));
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addProductToAnOrder = addProductToAnOrder;
