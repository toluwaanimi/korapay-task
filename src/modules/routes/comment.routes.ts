import express, {Router} from 'express';
import isAuthorized from "../../shared/middlewares/isAuthorized";
import CommentsController from "../controllers/comments.controller";

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
router.post('/', isAuthorized, CommentsController.create)
router.put('/:id', isAuthorized, CommentsController.editComment)
router.delete('/', isAuthorized, CommentsController.removeComment)
export const commentRoutes: Router = router
