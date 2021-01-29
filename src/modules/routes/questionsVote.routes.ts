import express, {Router} from 'express';
import isAuthorized from "../../shared/middlewares/isAuthorized";
import VoteController from "../controllers/vote.controller";
import VoteHandler from "../../shared/middlewares/voteHandler";
import {validateVoteQuestionParams} from "../../shared/validations/vote.validation";

const router = express.Router();

/**
 * @api {post} /auth/register Create user
 * @apiName Create new user
 * @apiParam  {String} [userName] username
 * @apiParam  {String} [email] Email
 * @apiParam  {String} [phone] Phone number
 * @apiParam  {String} [status] Status
 * @apiSuccess (200) {Object} mixed `User` object
 */
router.post('/upvote', [isAuthorized, validateVoteQuestionParams, VoteHandler.rateLimiter, VoteHandler.alreadyUpVotedQuestion], VoteController.upVoteQuestion)
router.post('/undoupvote', [isAuthorized, validateVoteQuestionParams, VoteHandler.validateUpVote], VoteController.undoUpVoteQuestion)
router.post('/downvote', [isAuthorized, validateVoteQuestionParams, VoteHandler.rateLimiter, VoteHandler.alreadyDownVotedQuestion], VoteController.downVoteQuestion)
router.post('/undodownvote', [isAuthorized, validateVoteQuestionParams, VoteHandler.validateDownVote], VoteController.undoDownVoteQuestion)

export const questionsVotesRoutes: Router = router
