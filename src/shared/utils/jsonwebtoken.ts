import jwt from "jsonwebtoken";
import {Request, Response} from "express";
import {handleFailure} from "./responseHandler";

const secret: string = process.env.JWT_SECRET || "key"

/**
 * Generate Token
 *
 * @param {*} payload
 * @param {*} exp
 */

interface Payload {
    id: number
}

const generateToken = async (payload: Payload, exp = '30d') => {
    return jwt.sign(payload, secret, {
        expiresIn: exp
    });
};

/**
 * Verify Token
 * @param {*} token
 * @param {*} res
 */
const verifyToken = (token: any, req: Request, res: Response): any => jwt.verify(token, secret, (err: any, decoded: any) => {
    if (err) {
        return handleFailure(401, "unauthorized", "", req, res)
    }
    return decoded;
});
export {
    generateToken,
    verifyToken
}