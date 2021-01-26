import {NextFunction, Request, Response} from 'express';
import HttpException from "./HttpException";


function handleSuccess(code: number, message: string, data: any, request: Request, response: Response, meta ?: any, next?: NextFunction) {
    response
        .status(code)
        .json({
            status: true,
            message,
            data: data,
            meta
        });
}

function handleFailure(code: number, message: string, data: any, request: Request, response: Response, meta ?: any, next?: NextFunction) {
    response
        .status(code)
        .json({
            status: false,
            message,
            data: data,
            meta
        });
}

export {
    handleSuccess,
    handleFailure
}