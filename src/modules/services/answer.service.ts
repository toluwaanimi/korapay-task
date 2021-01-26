import {Answers} from "../../models/Answers";


export class AnswerService {
    static async submit(data: any, user: any) {
        return await Answers.create({
            questionId: data.id,
            answer: data.answer,
            userId: user.id
        })
    }


    static async markRight(data: any) {
        await Answers.update({is_answer: true}, {where: {is_answer: false, id: data.id}})
        return Answers.findOne({where: {id: data.id}})
    }

    static async deleteOne(data: any, user: any) {
        return await Answers.destroy({where: {id: data.id, userId: user.id}})
    }
}