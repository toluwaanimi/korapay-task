import {NextFunction, Request, Response} from "express";
import {handleSuccess} from "../../shared/utils/responseHandler";
import {AnswerService} from "../services/answer.service";

export default class AnswerController {
    /**
     * @method  create
     * @description submit and answer to a given question asked
     * @param {*} req
     * @param {*} res
     * @param {*} next
     * @returns handleSuccess
     */
    static async create(req: any, res: Response, next: NextFunction) {
        try {
            const question = await AnswerService.submit({id: req.params.id, answer: req.body.answer}, req.user)
            return handleSuccess(201, "answer recorded", question, req, res)
        } catch (e) {
            next(e)
        }
    }

    /**
     * @method  markRight
     * @description Allows the question gets marked as right by the user that asked the question
     * @param {*} req
     * @param {*} res
     * @param {*} next
     * @returns handleSuccess
     */
    static async markRight(req: any, res: Response, next: NextFunction) {
        try {
            const answer = await AnswerService.markRight({id: req.params.id})
            return handleSuccess(200, "answer marked", answer, req, res)
        } catch (e) {
            next(e)
        }
    }

    /**
     * @method  markRight
     * @description It deletes a submitted answer
     * @param {*} req
     * @param {*} res
     * @param {*} next
     * @returns handleSuccess
     */
    static async deleteOne(req: any, res: Response, next: NextFunction) {
        try {
            await AnswerService.deleteOne({id: req.params.id}, req.user)
        } catch (e) {
            next(e)
        }
    }

}