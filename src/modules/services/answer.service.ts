import {Answers} from "../../models/Answers";
import NotificationHandler from "../event/NotificationHandler";
import BadRequestException from "../../shared/exception/BadRequestException";
import {Users} from "../../models/Users";
import {Sequelize} from "sequelize-typescript";

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
        const t = await new Sequelize().transaction()

        try {
            const answer = await Answers.create({
                questionId: data.id,
                answer: data.answer,
                userId: user.id
            }, {transaction: t})

            await NotificationHandler.notifyUsers({
                userId: user.id,
                questionId: data.id
            })
            await t.commit()
            return answer
        } catch (e) {
            await t.rollback()
            throw new BadRequestException('could not submit answer')
        }
    }


    /**
     * @method  submit
     * @description method to update an answer to be marked
     * @returns {}
     * @param data
     */
    static async markRight(data: any) {
        const t = await new Sequelize().transaction()

        try {
            const answer = await Answers.update({is_answer: true}, {
                where: {
                    is_answer: false,
                    id: data.id,
                    questionId: data.questionId
                },
                transaction: t
            })
            const userThatAnsweredId = await Answers.findOne({where: {id: data.id}})
            // @ts-ignore
            const user = await Users.findOne({id: userThatAnsweredId?.userId})
            // @ts-ignore
            await Users.update({reputation: parseInt(user?.reputation) + 15}, {where: {id: user.id}, transaction: t})
            await t.commit()
            return answer
        } catch (e) {
            await t.rollback()
            throw new BadRequestException('could not mark the answer right')
        }
    }

    /**
     * @method  deleteOne
     * @description deletes an answer
     * @returns {}
     * @param data
     * @param user
     */
    static async deleteOne(data: any, user: any) {
        const t = await new Sequelize().transaction()

        try {
            return await Answers.destroy({where: {id: data.id, userId: user.id},})

        } catch (e) {
            throw new BadRequestException('failed to delete answer')
        }
    }
}