import io from './socket';
import {Subscription} from "../../models/Subscription";
import {Notification} from "../../models/Notification";



/**
    *@class NotificationHandler
 */
export default class NotificationHandler {


    /**
     * @method  notifyUsers
     * @description it notifies the user when there is an activity for a question
     * @param data
     */
    static async notifyUsers(data: any) {
        const subscribers = await NotificationHandler.getSubscribedUsers(data.questionId);
        // @ts-ignore
        subscribers.map((value) => {
            NotificationHandler.setNotification({
                userId: value.userId,
                questionId: data.questionId
            });
            NotificationHandler.notify(value.channel);
        });
    }

    /**
     * @method  notify
     * @description it emit a notification to the socket
     * @param channel
     */
    static notify(channel: any) {
        io.on('connection', () => {
            io.to(channel).emit('notification', 'New response on subscribed question');
        });
    }


    /**
     * @method  subscribe
     * @description subscribe a user to a channel
     * @param channel
     */
    static subscribe(channel: any) {
        io.on('connection', (socket: any) => {
            socket.join(channel);
        });
    }

    /**
     * @method  getSubscribedUsers
     * @description gets all subscribed to a particular channel
     * @param id
     */
    static async getSubscribedUsers(id: number) {
        return await Subscription.findAll({where: {questionId: id}});
    }

    /**
     * @method  setNotification
     * @description save notification
     * @param payload
     */
    static async setNotification(payload: any) {
        return await Notification.create({
            userId: payload.userId,
            questionId: payload.questionId
        })
    }
}