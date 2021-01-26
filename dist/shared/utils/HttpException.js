"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpException extends Error {
    constructor(code, message, data) {
        super(message);
        this.code = code;
        this.message = message;
        this.data = data;
    }
}
exports.default = HttpException;
