"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const responseHandler_1 = require("../../shared/utils/responseHandler");
const question_service_1 = require("../services/question.service");
class QuestionController {
    /**
     * @method  createAccount
     * @description
     * @param {*} req
     * @param {*} res
     * @param {*} next
     */
    static create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const question = yield question_service_1.QuestionService.create(req.body, req.user);
                return responseHandler_1.handleSuccess(201, "question created", question, req, res);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static findUserQuestions(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.user);
                const questions = yield question_service_1.QuestionService.findUserQuestions(req.query, req.user);
                return responseHandler_1.handleSuccess(200, "question fetched", questions, req, res, questions.rows);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static findOneQuestion(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            try {
                const questions = yield question_service_1.QuestionService.findOneQuestion(req.params);
                return responseHandler_1.handleSuccess(200, "question fetched", questions, req, res);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static findAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const questions = yield question_service_1.QuestionService.findAllQuestions(req.query);
                return responseHandler_1.handleSuccess(200, "question fetched", questions, req, res, questions.rows);
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.default = QuestionController;
