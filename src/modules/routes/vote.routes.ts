import express, {Router} from 'express';
import isAuthorized from "../../shared/middlewares/isAuthorized";
import VoteController from "../controllers/vote.controller";
import VoteHandler from "../../shared/middlewares/voteHandler";

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
router.post('/upvote', [isAuthorized, VoteHandler.rateLimiter, VoteHandler.alreadyUpVotedAnswer], VoteController.upVoteAnswer)
router.post('/undoupvote', [isAuthorized, VoteHandler.validateUpVote], VoteController.undoUpVoteAnswer)
router.post('/downvote', [isAuthorized, VoteHandler.rateLimiter, VoteHandler.alreadyDownVotedAnswer], VoteController.downVoteAnswer)
router.post('/undodownvote', [isAuthorized, VoteHandler.validateDownVote], VoteController.undoDownVoteAnswer)

export const voteRoutes: Router = router
