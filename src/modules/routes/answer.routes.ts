import express, {Router} from 'express';
import isAuthorized from "../../shared/middlewares/isAuthorized";
import AnswerHandler from '../../shared/middlewares/answerHandler'
import AnswerController from "../controllers/answer.controller";
import {
    validateCreateAnswerBody,
    validateMarkAnswerParams,
    validateOneAnswerParams
} from "../../shared/validations/answer.validation";

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
router.post('/:id', [isAuthorized, validateCreateAnswerBody, validateOneAnswerParams], AnswerController.create)
router.put('/:questionId/:id', [isAuthorized, validateMarkAnswerParams, AnswerHandler.validateUserAcceptAnswerRequest], AnswerController.markRight)
router.delete('/:id', [isAuthorized, validateOneAnswerParams], AnswerController.deleteOne)
export const answerRoutes: Router = router
