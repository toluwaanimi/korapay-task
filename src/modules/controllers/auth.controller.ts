import {NextFunction, Request, Response} from "express";
import AuthService from "../services/auth.service";
import {handleSuccess} from "../../shared/utils/responseHandler";

export default class AuthController {
    /**
     * @method  createAccount
     * @description
     * @param {*} req
     * @param {*} res
     * @param {*} next
     */
    static async createAccount(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await AuthService.createAccount(req.body)
            return handleSuccess(201, "account created", {token: user}, req, res)
        } catch (e) {
            next(e)
        }
    }

    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await AuthService.login(req.body)
            return handleSuccess(200, "successful login", {token: user}, req, res)
        } catch (e) {
            next(e)
        }
    }
}