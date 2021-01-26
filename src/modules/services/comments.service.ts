import {Comments} from "../../models/Comments";
import NotFoundException from "../../shared/exception/NotFoundException";

export class CommentsService {
    static async create(data: any, user: any) {
        return await Comments.create({
            comment: data.comment,
            answerId: data.answerId,
            questionId: data.questionId,
            userId: user.userId
        })
    }


    static async editComment(data: any, user: any) {
        const comment = await Comments.findOne({where: {id: data.id, userId: user.id}})
        if (comment) {
            await Comments.update({comment: data.comment || comment.comment}, {where: {id: data.id, userId: user.id}})
            return Comments.findOne({where: {id: data.id, userId: user.id}})
        } else {
            throw new NotFoundException('invalid comment id')
        }
    }


    static async deleteComment(data: any, user: any) {
        return await Comments.destroy({where: {userId: user.id, id: data.id}})
    }


}