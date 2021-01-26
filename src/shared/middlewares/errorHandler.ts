import {NextFunction, Request, Response} from 'express';
import HttpException from '../utils/HttpException';

function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction) {
    const code = error.code || 500;
    const message = error.message || 'Something went wrong';
    response
        .status(code)
        .json({
            status: false,
            message,
        });
}

export default errorMiddleware;
