import io from './socket';
import {Subscription} from "../../models/Subscription";
import {Notification} from "../../models/Notification";

export default class NotificationHandler {

    static async notifyUsers(data:any) {
        const subscribers = await NotificationHandler.getSubscribedUsers(data.questionId);
        // @ts-ignore
        subscribers.map((value) => {
            NotificationHandler.setNotification({
                userId: value.subscriber,
                questionId: data.questionId
            });
            NotificationHandler.notify(value.channel);
        });
    }

    static notify(channel: any) {
        io.on('connection', () => {
            io.to(channel).emit('notification', 'New response on subscribed question');
        });
    }


    static subscribe(channel: any) {
        io.on('connection', (socket: any) => {
            socket.join(channel);
        });
    }

    static async getSubscribedUsers(id: number) {
        return await Subscription.findOne({where: {questionId: id}});
    }

    static async setNotification(payload: any) {
        return await Notification.create({
            userId: payload.userId,
            questionId: payload.questionId
        })
    }
}