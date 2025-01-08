"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.superOriginalMethod = superOriginalMethod;
function superOriginalMethod(value) {
    if (!value)
        return false;
    const parsed = Number(value);
    if (Number.isInteger(parsed))
        return parsed;
    return false;
}
