import {NextFunction, Request, Response} from "express";
import {handleFailure} from "../utils/responseHandler";
import {Users} from "../../models/Users";
import {Questions} from "../../models/Questions";

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
        const question = await Questions.findOne({where: {id: req.body.questionId}, logging: false})
        if (!question) return handleFailure(404, "invalid question id", undefined, req, res,)
        next()
    }
}