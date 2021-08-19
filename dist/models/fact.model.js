"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fact = void 0;
const mongoose_1 = require("mongoose");
const FactSchema = new mongoose_1.Schema({
    fact: { type: String, required: true },
    author: { type: String, required: true },
    dateAdded: { type: Date, required: true }
});
exports.Fact = mongoose_1.model('fact', FactSchema);
//# sourceMappingURL=fact.model.js.map