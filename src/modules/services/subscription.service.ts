import {Subscription} from "../../models/Subscription";
import NotificationHandler from "../event/NotificationHandler";
import BadRequestException from "../../shared/exception/BadRequestException";

/**
 * @class SubscriptionService
 */
export class SubscriptionService {
    /**
     * @method  subscribe
     * @description subscribe to a question activity
     * @returns {}
     * @param data
     * @param user
     */
    static async subscribe(data: any, user: any) {
        NotificationHandler.subscribe(`channel-${data.questionId}`)
        try {
            return await Subscription.findOrCreate({
                where: {
                    channel: `channel-${data.questionId}`,
                    userId: user.id,
                    questionId: data.questionId
                },
                
            })
        } catch (e) {
            throw new BadRequestException('failed to create subscription')
        }

    }
}