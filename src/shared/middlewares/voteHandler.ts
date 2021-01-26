import {Questions} from "../../models/Questions";
import {NextFunction, Request, Response} from "express";
import RequestWithUser from "../utils/RequestWithUser";
import {handleFailure} from "../utils/responseHandler";
import {Votes} from "../../models/Votes";

export default class VoteHandler {
    static async validateUserVote(req: RequestWithUser, res: Response, next: NextFunction) {
        const id = req.params;
        const user = req.user.id
        const question = await Questions.findOne({where: {id, userId: user}})
        if (question) return handleFailure(400, "you cant vote your question", [], req, res)
        // @ts-ignore
        const voteExist = await Votes.findOne({where: {questionId: question.id}})

        next()
    }
}