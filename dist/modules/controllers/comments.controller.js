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
const comments_service_1 = require("../services/comments.service");
class CommentsController {
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
                const comments = yield comments_service_1.CommentsService.create(req.body, req.user);
                return responseHandler_1.handleSuccess(201, "comment created", comments, req, res);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static editComment(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const comment = yield comments_service_1.CommentsService.editComment({ id: req.params.id, comment: req.body.comment }, req.user);
                return responseHandler_1.handleSuccess(200, "comment updated", comment, req, res);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static removeComment(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield comments_service_1.CommentsService.deleteComment(req.params, req.user);
                return responseHandler_1.handleSuccess(200, "comment deleted", "", req, res);
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.default = CommentsController;
