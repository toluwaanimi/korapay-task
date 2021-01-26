import {NextFunction, Request, Response} from "express";
import {handleSuccess} from "../../shared/utils/responseHandler";
import RequestWithUser from "../../shared/utils/RequestWithUser";
import {CommentsService} from "../services/comments.service";

export default class CommentsController {
    /**
     * @method  createAccount
     * @description
     * @param {*} req
     * @param {*} res
     * @param {*} next
     */
    static async create(req: any, res: Response, next: NextFunction) {
        try {
            const comments = await CommentsService.create(req.body, req.user)
            return handleSuccess(201, "comment created", comments, req, res)
        } catch (e) {
            next(e)
        }
    }

    static async editComment(req: any, res: Response, next: NextFunction) {
        try {
            const comment = await CommentsService.editComment({id: req.params.id, comment: req.body.comment}, req.user)
            return handleSuccess(200, "comment updated", comment, req, res)
        } catch (e) {
            next(e)
        }
    }


    static async removeComment(req: any, res: Response, next: NextFunction) {
        try {
            await CommentsService.deleteComment(req.params, req.user)
            return handleSuccess(200, "comment deleted", "", req, res)
        } catch (e) {
            next(e)
        }
    }

}