import {Comments} from "../../models/Comments";
import NotFoundException from "../../shared/exception/NotFoundException";
import NotificationHandler from "../event/NotificationHandler";
import BadRequestException from "../../shared/exception/BadRequestException";


/**
 * @class CommentsService
 */
export class CommentsService {

    /**
     * @method  create
     * @description Create a comment
     * @returns {}
     * @param data
     * @param user
     */
    static async create(data: any, user: any) {
        try {
            const comment = await Comments.create({
                comment: data.comment,
                answerId: data.answerId,
                questionId: data.questionId,
                userId: user.id
            })

            await NotificationHandler.notifyUsers({
                userId: user.id,
                questionId: data.questionId
            })
            return comment
        } catch (e) {
            throw new BadRequestException('could not save comment')
        }


    }

    /**
     * @method  editComment
     * @description edit a comment
     * @returns {}
     * @param data
     * @param user
     */

    static async editComment(data: any, user: any) {
        const comment = await Comments.findOne({where: {id: parseInt(data.id), userId: user.id}})
        if (comment) {
            await Comments.update({comment: data.comment || comment.comment}, {where: {id: data.id, userId: user.id}})
            return Comments.findOne({where: {id: data.id, userId: user.id}})
        } else {
            throw new NotFoundException('invalid comment id')
        }
    }

    /**
     * @method  deleteComment
     * @description delete a comment
     * @returns {}
     * @param data
     * @param user
     */
    static async deleteComment(data: any, user: any) {
        try {
            return await Comments.destroy({where: {userId: user.id, id: data.id}})

        } catch (e) {
            throw new BadRequestException('could not delete comment')
        }
    }

}