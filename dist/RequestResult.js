"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestOk = requestOk;
exports.requestError = requestError;
function requestOk(value) {
    return { ok: true, value };
}
function requestError(message, code) {
    return { ok: false, message, code };
}
