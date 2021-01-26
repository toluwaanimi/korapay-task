"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerBase = void 0;
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("./auth.routes");
const question_routes_1 = require("./question.routes");
const answer_routes_1 = require("./answer.routes");
const comment_routes_1 = require("./comment.routes");
const router = express_1.default.Router();
router.use('/auth', auth_routes_1.authRoutes);
router.use('/question', question_routes_1.questionRoutes);
router.use('/answer', answer_routes_1.answerRoutes);
router.use('/comment', comment_routes_1.commentRoutes);
exports.routerBase = router;
