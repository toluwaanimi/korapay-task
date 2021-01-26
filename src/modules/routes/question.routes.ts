import express, {Router} from 'express';
import QuestionController from "../controllers/question.controller";
import isAuthorized from "../../shared/middlewares/isAuthorized";

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
router.get('/', QuestionController.findAll)
router.get('/:id', QuestionController.findOneQuestion)
// router.get('/list', isAuthorized, QuestionController.findUserQuestions)
router.post('/', isAuthorized, QuestionController.create)
export const questionRoutes: Router = router
