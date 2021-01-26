"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.answerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const isAuthorized_1 = __importDefault(require("../../shared/middlewares/isAuthorized"));
const answer_service_1 = require("../services/answer.service");
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
router.post('/', isAuthorized_1.default, answer_service_1.AnswerService.submit);
router.put('/:id', isAuthorized_1.default, answer_service_1.AnswerService.markRight);
router.delete('/', isAuthorized_1.default, answer_service_1.AnswerService.deleteOne);
exports.answerRoutes = router;
