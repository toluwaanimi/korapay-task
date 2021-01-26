import {Questions} from "../../models/Questions";
import {NextFunction, Request, Response} from "express";
import RequestWithUser from "../utils/RequestWithUser";
import {handleFailure} from "../utils/responseHandler";
import {Votes} from "../../models/Votes";
import {Answers} from "../../models/Answers";

export default class AnswerHandler {
    static async validateUserAcceptAnswerRequest(req: any, res: Response, next: NextFunction) {
        const id = req.params;
        const user = req.user.id
        const question = await Questions.findOne({where: {id, userId: user}})
        if (!question) return handleFailure(400, "you cant make this answer right because you didnt ask the question", [], req, res)


        next()
    }
}