// import Response from "./response";
import {verifyToken} from "../utils/jsonwebtoken";
import {NextFunction, Response} from "express";
import RequestWithUser from "../utils/RequestWithUser";
import {Users} from "../../models/Users";
import {handleFailure} from "../utils/responseHandler";

/**
 * Authenticated user middleware
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const isAuthorized = async (req: any, res: Response, next: NextFunction) => {
    const {authorization} = req.headers;

    if (typeof authorization === 'undefined') {
        return handleFailure(401, 'Unauthorized - Header Not Set', "", req, res);
    }
    // @ts-ignore
    const token = authorization.split(' ')[1];
    if (!token) {
        return handleFailure(401, 'Access Denied. Please Log In.', "", req, res,);
    }

    try {
        const decoded = verifyToken(token, req, res)
        req.user = await Users.findByPk(decoded.id);
        next();
    } catch (error) {
        return handleFailure(401, 'Error in verification. Please try again', "", req, res);
    }
}

export default isAuthorized;
