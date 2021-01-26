"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Votes = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Questions_1 = require("./Questions");
const Users_1 = require("./Users");
const Answers_1 = require("./Answers");
let Votes = class Votes extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], Votes.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Default(''),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ENUM('upvote', 'downvote'))
], Votes.prototype, "voteType", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Answers_1.Answers)
], Votes.prototype, "answers", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Answers_1.Answers),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], Votes.prototype, "answerId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Questions_1.Questions)
], Votes.prototype, "questions", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Questions_1.Questions),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], Votes.prototype, "questionId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Users_1.Users)
], Votes.prototype, "users", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Users_1.Users),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], Votes.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE)
], Votes.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE)
], Votes.prototype, "updatedAt", void 0);
Votes = __decorate([
    sequelize_typescript_1.Table({ tableName: 'votes' })
], Votes);
exports.Votes = Votes;
