import {NextFunction, Request, Response} from "express";
import {handleSuccess} from "../../shared/utils/responseHandler";
import {QuestionService} from "../services/question.service";
import RequestWithUser from "../../shared/utils/RequestWithUser";

export default class QuestionController {
    /**
     * @method  createAccount
     * @description
     * @param {*} req
     * @param {*} res
     * @param {*} next
     */
    static async create(req: any, res: Response, next: NextFunction) {
        try {
            const question = await QuestionService.create(req.body, req.user)
            return handleSuccess(201, "question created", question, req, res)
        } catch (e) {
            next(e)
        }
    }

    static async findUserQuestions(req: any, res: Response, next: NextFunction) {
        try {
            console.log(req.user)
            const questions = await QuestionService.findUserQuestions(req.query, req.user)
            return handleSuccess(200, "question fetched", questions.rows, req, res,)
        } catch (e) {
            next(e)
        }
    }


    static async findOneQuestion(req: Request, res: Response, next: NextFunction) {
        console.log(req.params)
        try {
            const questions = await QuestionService.findOneQuestion(req.params)

            return handleSuccess(200, "question fetched", questions, req, res)
        } catch (e) {
            next(e)
        }
    }

    static async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const questions = await QuestionService.findAllQuestions(req.query)
            return handleSuccess(200, "question fetched", questions.rows, req, res)
        } catch (e) {
            next(e)
        }
    }
}