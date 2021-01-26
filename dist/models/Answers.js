"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Answers = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Users_1 = require("./Users");
const Questions_1 = require("./Questions");
const Votes_1 = require("./Votes");
let Answers = class Answers extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], Answers.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT)
], Answers.prototype, "answer", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Questions_1.Questions),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], Answers.prototype, "questionId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Questions_1.Questions)
], Answers.prototype, "questions", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Users_1.Users),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], Answers.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Users_1.Users)
], Answers.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.Default(false),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.BOOLEAN)
], Answers.prototype, "is_answer", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Votes_1.Votes)
], Answers.prototype, "votes", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE)
], Answers.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE)
], Answers.prototype, "updatedAt", void 0);
Answers = __decorate([
    sequelize_typescript_1.Table({ tableName: 'answers' })
], Answers);
exports.Answers = Answers;
