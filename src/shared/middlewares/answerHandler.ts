import {Questions} from "../../models/Questions";
import {NextFunction, Request, Response} from "express";
import {handleFailure} from "../utils/responseHandler";

/**
 *@class AnswerHandler
 */
export default class AnswerHandler {

    /**
     * @method  validateUserAcceptAnswerRequest
     * @description middleware to validate if a user can make an answer right
     * @param req
     * @param res
     * @param next
     * @returns handleFailure
     */
    static async validateUserAcceptAnswerRequest(req: any, res: Response, next: NextFunction) {
        const questionId = req.params.questionId;
        const user = req.user.id
        const question = await Questions.findOne({where: {id: questionId, userId: user}})
        if (!question) return handleFailure(400, "you cant make this answer right because you didnt ask the question", undefined, req, res)
        next()
    }
}