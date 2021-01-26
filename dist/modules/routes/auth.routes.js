"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const auth_validation_1 = require("../../shared/validations/auth.validation");
const router = express_1.default.Router();
/**
 * @api {post} /auth/register Create user
 * @apiName Create new user
 * @apiParam  {String} [userName] username
 * @apiParam  {String} [email] Email
 * @apiParam  {String} [phone] Phone number
 * @apiParam  {String} [status] Status
 *
 * @apiSuccess (201) {Object} mixed `User` object
 */
router.post('/register', [auth_validation_1.validateSignUpBody], auth_controller_1.default.createAccount);
router.post('/login', [auth_validation_1.validateSignInBody], auth_controller_1.default.login);
exports.authRoutes = router;
