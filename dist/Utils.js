"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NothingEntity = void 0;
exports.parseStringToInt = parseStringToInt;
function parseStringToInt(value) {
    if (!value)
        return false;
    const parsed = Number(value);
    if (Number.isInteger(parsed))
        return parsed;
    return false;
}
class NothingEntity {
    constructor(id) {
        this.id = id;
    }
}
exports.NothingEntity = NothingEntity;
