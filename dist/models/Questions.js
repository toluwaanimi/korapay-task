"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Questions = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Users_1 = require("./Users");
const Answers_1 = require("./Answers");
const Votes_1 = require("./Votes");
let Questions = class Questions extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], Questions.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], Questions.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT)
], Questions.prototype, "question", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING))
], Questions.prototype, "tags", void 0);
__decorate([
    sequelize_typescript_1.Default(false),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.BOOLEAN)
], Questions.prototype, "is_answered", void 0);
__decorate([
    sequelize_typescript_1.Default(0),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], Questions.prototype, "views", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Users_1.Users),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
], Questions.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Users_1.Users)
], Questions.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Votes_1.Votes)
], Questions.prototype, "votes", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Answers_1.Answers)
], Questions.prototype, "answers", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE)
], Questions.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE)
], Questions.prototype, "updatedAt", void 0);
Questions = __decorate([
    sequelize_typescript_1.Table({ tableName: 'questions' })
], Questions);
exports.Questions = Questions;
