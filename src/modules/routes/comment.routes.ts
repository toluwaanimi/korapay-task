import express, {Router} from 'express';
import isAuthorized from "../../shared/middlewares/isAuthorized";
import {CommentsService} from "../services/comments.service";

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
router.post('/', isAuthorized, CommentsService.create)
router.put('/:id', isAuthorized, CommentsService.editComment)
router.delete('/', isAuthorized, CommentsService.deleteComment)
export const commentRoutes: Router = router
