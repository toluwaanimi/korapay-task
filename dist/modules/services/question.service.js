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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionService = void 0;
const Questions_1 = require("../../models/Questions");
const Answers_1 = require("../../models/Answers");
const NotFoundException_1 = __importDefault(require("../../shared/exception/NotFoundException"));
class QuestionService {
    static create(data, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const question = yield Questions_1.Questions.create({
                title: data.title,
                question: data.question,
                userId: user.id
            });
            if (data.answer) {
                yield Answers_1.Answers.create({
                    answer: data.answer,
                    questionId: question.id,
                    userId: user.id
                });
                return question;
            }
            else {
                return question;
            }
        });
    }
    static findUserQuestions(data, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Questions_1.Questions.findAndCountAll({
                where: { userId: user.userdataValues.id },
                limit: data.per_page,
                offset: data.page
            });
        });
    }
    static findOneQuestion(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const question = yield Questions_1.Questions.findOne({
                where: { id: data.id }, include: [{
                        model: Answers_1.Answers,
                        as: 'answers'
                    }]
            });
            if (question) {
                yield Questions_1.Questions.update({ views: question.views + 1 }, { where: { id: data.id } });
                return question;
            }
            else {
                throw new NotFoundException_1.default('invalid question id');
            }
        });
    }
    static findAllQuestions(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Questions_1.Questions.findAndCountAll({ limit: data.per_page, offset: data.page });
        });
    }
}
exports.QuestionService = QuestionService;
