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
const answer_service_1 = require("../services/answer.service");
class AnswerController {
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
                const question = yield answer_service_1.AnswerService.submit({ id: req.params.id, answer: req.body.answer }, req.user);
                return responseHandler_1.handleSuccess(201, "answer recorded", question, req, res);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static markRight(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const answer = yield answer_service_1.AnswerService.markRight({ id: req.params.id });
                return responseHandler_1.handleSuccess(200, "answer marked", answer, req, res);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static deleteOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield answer_service_1.AnswerService.deleteOne({ id: req.params.id }, req.user);
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.default = AnswerController;
