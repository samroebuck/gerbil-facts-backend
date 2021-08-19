"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.factsRouter = void 0;
const express_1 = __importDefault(require("express"));
const facts_controller_1 = require("../controllers/facts.controller");
exports.factsRouter = express_1.default.Router();
exports.factsRouter.route('/')
    .get(facts_controller_1.getAllFacts);
//# sourceMappingURL=facts.routes.js.map