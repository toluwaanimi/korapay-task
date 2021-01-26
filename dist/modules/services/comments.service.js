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
exports.CommentsService = void 0;
const Comments_1 = require("../../models/Comments");
const NotFoundException_1 = __importDefault(require("../../shared/exception/NotFoundException"));
class CommentsService {
    static create(data, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Comments_1.Comments.create({
                comment: data.comment,
                answerId: data.answerId,
                questionId: data.questionId,
                userId: user.userId
            });
        });
    }
    static editComment(data, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const comment = yield Comments_1.Comments.findOne({ where: { id: data.id, userId: user.id } });
            if (comment) {
                yield Comments_1.Comments.update({ comment: data.comment || comment.comment }, { where: { id: data.id, userId: user.id } });
                return Comments_1.Comments.findOne({ where: { id: data.id, userId: user.id } });
            }
            else {
                throw new NotFoundException_1.default('invalid comment id');
            }
        });
    }
    static deleteComment(data, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Comments_1.Comments.destroy({ where: { userId: user.id, id: data.id } });
        });
    }
}
exports.CommentsService = CommentsService;
