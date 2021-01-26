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
const Questions_1 = require("../../models/Questions");
const responseHandler_1 = require("../utils/responseHandler");
class QuestionHandler {
    static validateUserVote(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params;
            const user = req.user.id;
            const question = yield Questions_1.Questions.findOne({ where: { id, userId: user } });
            if (question)
                return responseHandler_1.handleFailure(400, "you cant vote your question", [], req, res);
            next();
        });
    }
}
exports.default = QuestionHandler;
