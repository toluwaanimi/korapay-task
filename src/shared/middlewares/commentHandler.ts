import {NextFunction, Request, Response} from "express";
import {handleFailure} from "../utils/responseHandler";
import {Users} from "../../models/Users";

/**
 *@class AnswerHandler
 */
export default class CommentHandler {

    /**
     * @method  verifyReputation
     * @description middleware to validate if a user can make an comment
     * @param req
     * @param res
     * @param next
     * @returns handleFailure
     */
    static async verifyReputation(req: any, res: Response, next: NextFunction) {
        const id = req.user.id
        const user = await Users.findOne({where: {id}})
        // @ts-ignore
        if (user?.reputation < 50) return handleFailure(400, "you cant make this comment your reputation is below 50", undefined, req, res)
        next()
    }
}