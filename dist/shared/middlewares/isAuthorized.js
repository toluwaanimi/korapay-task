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
Object.defineProperty(exports, "__esModule", { value: true });
// import Response from "./response";
const jsonwebtoken_1 = require("../utils/jsonwebtoken");
const Users_1 = require("../../models/Users");
const responseHandler_1 = require("../utils/responseHandler");
/**
 * Authenticated user middleware
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const isAuthorized = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    if (typeof authorization === 'undefined') {
        return responseHandler_1.handleFailure(401, 'Unauthorized - Header Not Set', "", req, res);
    }
    // @ts-ignore
    const token = authorization.split(' ')[1];
    if (!token) {
        return responseHandler_1.handleFailure(401, 'Access Denied. Please Log In.', "", req, res);
    }
    try {
        const decoded = jsonwebtoken_1.verifyToken(token, req, res);
        req.user = yield Users_1.Users.findByPk(decoded.id);
        next();
    }
    catch (error) {
        return responseHandler_1.handleFailure(401, 'Error in verification. Please try again', "", req, res);
    }
});
exports.default = isAuthorized;
