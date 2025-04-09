"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStringToInt = parseStringToInt;
exports.parseStringToNumber = parseStringToNumber;
function parseStringToInt(value) {
    if (!value)
        return false;
    const parsed = Number(value);
    if (Number.isInteger(parsed))
        return parsed;
    return false;
}
function parseStringToNumber(value) {
    if (value.trim() === "")
        return undefined;
    const num = Number(value);
    if (isNaN(num))
        return undefined;
    // Check if it's a float with meaningful decimal part
    const hasDecimalInfo = value.includes('.') && !/\.0+$/.test(value);
    return hasDecimalInfo ? num : Math.trunc(num);
}
