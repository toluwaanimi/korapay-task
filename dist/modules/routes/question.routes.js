"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionRoutes = void 0;
const express_1 = __importDefault(require("express"));
const question_controller_1 = __importDefault(require("../controllers/question.controller"));
const isAuthorized_1 = __importDefault(require("../../shared/middlewares/isAuthorized"));
const router = express_1.default.Router();
/**
 * @api {post} /auth/register Create user
 * @apiName Create new user
 * @apiParam  {String} [userName] username
 * @apiParam  {String} [email] Email
 * @apiParam  {String} [phone] Phone number
 * @apiParam  {String} [status] Status
 * @apiSuccess (200) {Object} mixed `User` object
 */
router.get('/', question_controller_1.default.findAll);
router.get('/:id', question_controller_1.default.findOneQuestion);
// router.get('/list', isAuthorized, QuestionController.findUserQuestions)
router.post('/', isAuthorized_1.default, question_controller_1.default.create);
exports.questionRoutes = router;
