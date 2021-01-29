import {NextFunction, Request, Response} from "express";
import {handleSuccess} from "../../shared/utils/responseHandler";
import {SubscriptionService} from "../services/subscription.service";

export default class SubscriptionController {
    /**
     * @method  subscribe
     * @description create subscription for a user to help the user get notified when there's a reply
     * @param {*} req
     * @param {*} res
     * @param {*} next
     * @returns handleSuccess
     */
    static async subscribe(req: any, res: Response, next: NextFunction) {
        try {
            const subscription = await SubscriptionService.subscribe(req.body, req.user)
            return handleSuccess(201, "subscribed", subscription[0], req, res)
        } catch (e) {
            next(e)
        }
    }
}