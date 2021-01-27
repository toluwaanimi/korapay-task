import {Subscription} from "../../models/Subscription";
import NotificationHandler from "../event/NotificationHandler";

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
        return await Subscription.create({
            channel: `channel-${data.questionId}`,
            userId: user.id,
            questionId: data.questionId
        })
    }
}