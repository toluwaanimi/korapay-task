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
exports.AnswerService = void 0;
const Answers_1 = require("../../models/Answers");
class AnswerService {
    static submit(data, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Answers_1.Answers.create({
                questionId: data.id,
                answer: data.answer,
                userId: user.id
            });
        });
    }
    static markRight(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Answers_1.Answers.update({ is_answer: true }, { where: { is_answer: false, id: data.id } });
            return Answers_1.Answers.findOne({ where: { id: data.id } });
        });
    }
    static deleteOne(data, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Answers_1.Answers.destroy({ where: { id: data.id, userId: user.id } });
        });
    }
}
exports.AnswerService = AnswerService;
