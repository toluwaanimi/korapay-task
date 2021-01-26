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
require('dotenv').config();
const http_1 = require("http");
const app_1 = require("./app");
const sequelize_1 = require("./sequelize");
const port = process.env.PORT || 3000;
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelize_1.sequelize.sync({ logging: false });
    http_1.createServer(app_1.app)
        .listen(port, () => console.info(`Server running on port ${port}`));
}))();
