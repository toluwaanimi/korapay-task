import {Answers} from "../../models/Answers";
import NotificationHandler from "../event/NotificationHandler";

/**
 *@class AnswerService
 */
export class AnswerService {

    /**
     * @method  submit
     * @description submit a answer for a question
     * @returns {}
     * @param data
     * @param user
     */
    static async submit(data: any, user: any) {
        await NotificationHandler.notifyUsers({
            userId: user.id,
            questionId: data.id
        })
        return await Answers.create({
            questionId: data.id,
            answer: data.answer,
            userId: user.id
        })
    }


    /**
     * @method  submit
     * @description method to update an answer to be marked
     * @returns {}
     * @param data
     */
    static async markRight(data: any) {
        await Answers.update({is_answer: true}, {where: {is_answer: false, id: data.id}})
        return Answers.findOne({where: {id: data.id}})
    }

    /**
     * @method  deleteOne
     * @description deletes an answer
     * @returns {}
     * @param data
     * @param user
     */
    static async deleteOne(data: any, user: any) {
        return await Answers.destroy({where: {id: data.id, userId: user.id}})
    }
}