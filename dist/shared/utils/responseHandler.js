"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleFailure = exports.handleSuccess = void 0;
function handleSuccess(code, message, data, request, response, meta, next) {
    response
        .status(code)
        .json({
        status: true,
        message,
        data: data,
        meta
    });
}
exports.handleSuccess = handleSuccess;
function handleFailure(code, message, data, request, response, meta, next) {
    response
        .status(code)
        .json({
        status: false,
        message,
        data: data,
        meta
    });
}
exports.handleFailure = handleFailure;
