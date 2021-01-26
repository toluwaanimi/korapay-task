import express, {Router} from 'express';
import isAuthorized from "../../shared/middlewares/isAuthorized";
import {AnswerService} from "../services/answer.service";
import AnswerHandler from '../../shared/middlewares/answerHandler'

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
router.post('/:id', isAuthorized, AnswerService.submit)
router.put('/:id', [isAuthorized, AnswerHandler.validateUserAcceptAnswerRequest], AnswerService.markRight)
router.delete('/', isAuthorized, AnswerService.deleteOne)
export const answerRoutes: Router = router
