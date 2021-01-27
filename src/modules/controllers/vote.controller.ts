import {NextFunction, Request, Response} from "express";
import {handleSuccess} from "../../shared/utils/responseHandler";
import {VoteService} from "../services/vote.service";

export default class VoteController {
    /**
     * @method  upVoterAnswer
     * @description helps an existing user upvote an answer
     * @param {*} req
     * @param {*} res
     * @param {*} next
     * @returns handleSuccess
     */
    static async upVoteAnswer(req: any, res: Response, next: NextFunction) {
        try {
            const votes = await VoteService.upVoteAnswer(req.body, req.user)
            return handleSuccess(201, "upVoteAnswer created", votes, req, res)
        } catch (e) {
            next(e)
        }
    }

    /**
     * @method  undoVoterAnswer
     * @description helps an existing user undo their upvote entry for an answer
     * @param {*} req
     * @param {*} res
     * @param {*} next
     * @returns handleSuccess
     */
    static async undoUpVoteAnswer(req: any, res: Response, next: NextFunction) {
        try {
            const vote = await VoteService.undoUpVoteAnswer(req.body, req.user)
            return handleSuccess(200, "vote removed", undefined, req, res)
        } catch (e) {
            next(e)
        }
    }

    /**
     * @method  downVoteAnswer
     * @description helps an existing user downvote an answer
     * @param {*} req
     * @param {*} res
     * @param {*} next
     * @returns handleSuccess
     */
    static async downVoteAnswer(req: any, res: Response, next: NextFunction) {
        try {
            const votes = await VoteService.downVoteAnswer(req.body, req.user)
            return handleSuccess(201, "downVoteAnswer created", votes, req, res)
        } catch (e) {
            next(e)
        }
    }

    /**
     * @method  undoDownVoteAnswer
     * @description helps an existing user undo their downvote entry for an answer
     * @param {*} req
     * @param {*} res
     * @param {*} next
     * @returns handleSuccess
     */
    static async undoDownVoteAnswer(req: any, res: Response, next: NextFunction) {
        try {
            const vote = await VoteService.undoDownVoteAnswer(req.body, req.user)
            return handleSuccess(200, "undoDownVoteAnswer removed", undefined, req, res)
        } catch (e) {
            next(e)
        }
    }

}