import {Answers} from "../../models/Answers";
import {Users} from "../../models/Users";
import {Votes} from "../../models/Votes";

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
            const answererUser = await Users.findOne({where: {id: answer.userId}})
            // @ts-ignore
            await Users.update({reputation: answererUser?.reputation + 10}, {where: {id: answer.userId}})
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

            // const activeUser = await Users.findOne({where : {id : user.id}})
            // await Users.update({},{where: {}})
            const answererUser = await Users.findOne({where: {id: answer.userId}})
            // @ts-ignore
            await Users.update({reputation: ((answererUser?.reputation - 10) < 1) ? 1 : answererUser?.reputation - 10}, {where: {id: answer.userId}})
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

            const activeUser = await Users.findOne({where: {id: user.id}})
            // @ts-ignore
            await Users.update({reputation: ((activeUser?.reputation - 1) < 1) ? 1 : activeUser?.reputation - 1}, {where: {id: user.id}})


            const answererUser = await Users.findOne({where: {id: answer.userId}})
            // @ts-ignore
            await Users.update({reputation: ((answererUser?.reputation - 2) < 1) ? 1 : answererUser?.reputation - 2}, {where: {id: answer.userId}})
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
            const activeUser = await Users.findOne({where: {id: user.id}})
            // @ts-ignore
            await Users.update({reputation: activeUser?.reputation + 1}, {where: {id: user.id}})


            const answererUser = await Users.findOne({where: {id: answer.userId}})
            // @ts-ignore
            await Users.update({reputation: answererUser?.reputation + 2}, {where: {id: answer.userId}})
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