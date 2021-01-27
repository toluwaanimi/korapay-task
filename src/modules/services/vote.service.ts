import {Answers} from "../../models/Answers";
import {Questions} from "../../models/Questions";
import {Users} from "../../models/Users";
import {Votes} from "../../models/Votes";
import {Rater} from "../../models/Rater";

/**
 * @class VoteService
 */
export class VoteService {

    /**
     * @method  upVoteAnswer
     * @description helps in upvoting an answer
     * @returns {}
     * @param data
     * @param user
     */
    static async upVoteAnswer(data: any, user: any) {
        const answer = await Answers.findOne({where: {id: data.answerId}})
        if (answer) {

            if (await Votes.findOne({
                where: {
                    voteType: 'downvote',
                    userId: user.id,
                    answerId: data.answerId
                }
            })) {
                await Votes.destroy({
                    where: {
                        voteType: 'downvote',
                        userId: user.id,
                        answerId: data.answerId
                    }
                })
                await Answers.update({
                    counts: answer?.counts + 2
                }, {where: {id: data.answerId}})
            } else {
                await Answers.update({
                    counts: answer?.counts + 1
                }, {where: {id: data.answerId}})
            }
        }
        return await Votes.create({
            voteType: 'upvote',
            userId: user.id,
            answerId: data.answerId
        })
    }

    /**
     * @method  undoUpVoteAnswer
     * @description helps in undoing a vote for a particular answer
     * @returns {}
     * @param data
     * @param user
     */
    static async undoUpVoteAnswer(data: any, user: any) {
        const answer = await Answers.findOne({where: {id: data.answerId}})
        if (answer) {
            await Answers.update({
                counts: answer?.counts - 1
            }, {where: {id: data.answerId}})
        }
        return await Votes.destroy({
            where: {
                voteType: 'upvote',
                userId: user.id,
                answerId: data.answerId
            }
        })
    }

    /**
     * @method  downVoteAnswer
     * @description helps in downvoting a particular answer entry of a user
     * @returns {}
     * @param data
     * @param user
     */
    static async downVoteAnswer(data: any, user: any) {
        const answer = await Answers.findOne({where: {id: data.answerId}})
        if (answer) {
            if (await Votes.findOne({
                where: {
                    voteType: 'upvote',
                    userId: user.id,
                    answerId: data.answerId
                }
            })) {
                await Votes.destroy({
                    where: {
                        voteType: 'upvote',
                        userId: user.id,
                        answerId: data.answerId
                    }
                })
                await Answers.update({
                    counts: answer?.counts - 2
                }, {where: {id: data.answerId}})
            } else {
                await Answers.update({
                    counts: answer?.counts - 1
                }, {where: {id: data.answerId}})
            }
        }

        return await Votes.create({
            voteType: 'downvote',
            userId: user.id,
            answerId: data.answerId
        })
    }

    /**
     * @method  undoDownVoteAnswer
     * @description helps in undoing a downvote entry of a user for an answer
     * @returns {}
     * @param data
     * @param user
     */
    static async undoDownVoteAnswer(data: any, user: any) {
        const answer = await Answers.findOne({where: {id: data.answerId}})
        if (answer) {
            await Answers.update({
                counts: answer?.counts + 1
            }, {where: {id: data.answerId}})
        }
        return await Votes.destroy({
            where: {
                voteType: 'downvote',
                userId: user.id,
                answerId: data.answerId
            }
        })
    }
}