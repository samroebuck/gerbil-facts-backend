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
exports.getARandomFact = void 0;
const fact_model_1 = require("../models/fact.model");
const getARandomFact = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const random = yield fact_model_1.Fact.aggregate([{ $sample: { size: 1 } }]);
        console.log(random);
        res.status(200).send(random);
    }
    catch (error) {
        next(error);
    }
});
exports.getARandomFact = getARandomFact;
//# sourceMappingURL=random.controller.js.map