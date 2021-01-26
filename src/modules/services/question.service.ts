import {Questions} from "../../models/Questions";
import {Answers} from "../../models/Answers";
import NotFoundException from "../../shared/exception/NotFoundException";
import {Votes} from "../../models/Votes";

export class QuestionService {
    static async create(data: any, user: any) {
        const question = await Questions.create({
            title: data.title,
            question: data.question,
            userId: user.id
        })
        if (data.answer) {
            await Answers.create({
                answer: data.answer,
                questionId: question.id,
                userId: user.id
            })
            return question
        } else {
            return question
        }
    }

    static async findUserQuestions(data: any, user: any) {

        return await Questions.findAndCountAll({
            where: {userId: user.userdataValues.id},
            limit: data.per_page || 50,
            offset: data.page || 1
        })
    }

    static async findOneQuestion(data: any) {
        const question = await Questions.findOne({
            where: {id: data.id}, include: [{
                model: Answers,
                as: 'answers'
            }]
        })
        if (question) {
            await Questions.update({views: question.views + 1}, {where: {id: data.id}})
            return question
        } else {
            throw new NotFoundException('invalid question id')
        }
    }

    static async findAllQuestions(data: any) {
        return await Questions.findAndCountAll({limit: data.per_page || 50, offset: data.page || 1})
    }


}