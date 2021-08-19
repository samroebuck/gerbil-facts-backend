"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomRouter = void 0;
const express_1 = __importDefault(require("express"));
const random_controller_1 = require("../controllers/random.controller");
exports.randomRouter = express_1.default.Router();
exports.randomRouter.route('/')
    .get(random_controller_1.getARandomFact);
//# sourceMappingURL=random.routes.js.map