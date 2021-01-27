import express, {Router} from 'express';
import isAuthorized from "../../shared/middlewares/isAuthorized";
import AnswerHandler from '../../shared/middlewares/answerHandler'
import AnswerController from "../controllers/answer.controller";

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
router.post('/:id', isAuthorized, AnswerController.create)
router.put('/:id', [isAuthorized, AnswerHandler.validateUserAcceptAnswerRequest], AnswerController.markRight)
router.delete('/', isAuthorized, AnswerController.deleteOne)
export const answerRoutes: Router = router
