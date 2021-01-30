import {Answers} from '../../models/Answers';
import {Comments} from '../../models/Comments';
import {Questions} from '../../models/Questions';
import BadRequestException from '../../shared/exception/BadRequestException';
import NotFoundException from '../../shared/exception/NotFoundException';


/**
 * @class QuestionService
 */
export class QuestionService {


    /**
     * @method  create
     * @description submit a question entry for a user
     * @returns {}
     * @param data
     * @param user
     */
    public static async create(data: any, user: any) {
        try {
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
        } catch (e) {
            throw new BadRequestException('failed to create question')
        }

    }


    /**
     * @method  findUserQuestions
     * @description get questions asked by a user
     * @returns []
     * @param data
     * @param user
     */
    public static async findUserQuestions(data: any, user: any) {
        return await Questions.findAndCountAll({
            where: {userId: user.userdataValues.id},
            limit: data.per_page || 50,
            offset: data.page || 1,
            include: [{
                model: Answers,
                as: 'answers',
                include: [{
                    model: Comments,
                    as: 'comments'
                }]
            }],
            logging: false
        })
    }


    /**
     * @method  findOneQuestion
     * @description get a single question
     * @returns {}
     * @param data
     */
    public static async findOneQuestion(data: any) {
        const question = await Questions.findOne({
            where: {id: data.id}, include: [{
                model: Answers,
                as: 'answers',
                include: [{
                    model: Comments,
                    as: 'comments'
                }]
            }],
            logging: false
        })
        if (question) {
            await Questions.update({views: question.views + 1}, {where: {id: data.id}, logging: false})
            return question
        } else {
            throw new NotFoundException('invalid question id')
        }
    }


    /**
     * @method  findAllQuestions
     * @description get all Questions
     * @returns []
     * @param data
     */
    public static async findAllQuestions(data: any) {
        return await Questions.findAndCountAll({
            limit: data.per_page || 50, offset: data.page || 0, include: [{
                model: Answers,
                as: 'answers',
                include: [{
                    model: Comments,
                    as: 'comments'
                }]
            }],
            logging: false
        })
    }


}