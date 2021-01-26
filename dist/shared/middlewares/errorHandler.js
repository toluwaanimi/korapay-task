"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorMiddleware(error, request, response, next) {
    const code = error.code || 500;
    const message = error.message || 'Something went wrong';
    response
        .status(code)
        .json({
        status: false,
        message,
    });
}
exports.default = errorMiddleware;
