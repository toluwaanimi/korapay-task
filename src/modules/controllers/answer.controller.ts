import {NextFunction, Request, Response} from "express";
import {handleSuccess} from "../../shared/utils/responseHandler";
import RequestWithUser from "../../shared/utils/RequestWithUser";
import {AnswerService} from "../services/answer.service";

export default class AnswerController {
    /**
     * @method  createAccount
     * @description
     * @param {*} req
     * @param {*} res
     * @param {*} next
     */
    static async create(req: any, res: Response, next: NextFunction) {
        try {
            const question = await AnswerService.submit({id: req.params.id, answer: req.body.answer}, req.user)
            return handleSuccess(201, "answer recorded", question, req, res)
        } catch (e) {
            next(e)
        }
    }

    static async markRight(req: any, res: Response, next: NextFunction) {
        try {
            const answer = await AnswerService.markRight({id: req.params.id})
            return handleSuccess(200, "answer marked", answer, req, res)
        } catch (e) {
            next(e)
        }
    }

    static async deleteOne(req: any, res: Response, next: NextFunction) {
        try {
            await AnswerService.deleteOne({id: req.params.id}, req.user)
        } catch (e) {
            next(e)
        }
    }

}