"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'postgres',
    database: 'korapay',
    port: 5432,
    host: 'localhost',
    username: 'emmanuel',
    password: 'password',
    models: [__dirname + '/models']
});
