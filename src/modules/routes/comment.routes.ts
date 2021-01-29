import express, {Router} from 'express';
import isAuthorized from "../../shared/middlewares/isAuthorized";
import CommentsController from "../controllers/comments.controller";
import CommentHandler from "../../shared/middlewares/commentHandler";
import {validateCommentBody, validateOneCommentParams} from "../../shared/validations/comment.validation";

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
router.post('/', [isAuthorized, validateCommentBody, CommentHandler.verifyReputation], CommentsController.create)
router.put('/:id', isAuthorized, validateOneCommentParams, CommentsController.editComment)
router.delete('/:id', isAuthorized, validateOneCommentParams, CommentsController.removeComment)
export const commentRoutes: Router = router
