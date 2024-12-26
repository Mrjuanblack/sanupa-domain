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
exports.ok = ok;
exports.err = err;
exports.asyncResult = asyncResult;
function ok(value) {
    return { ok: true, value };
}
function err(error) {
    return { ok: false, error };
}
function asyncResult(generator) {
    return __awaiter(this, void 0, void 0, function* () {
        const iterator = generator();
        while (true) {
            const { value, done } = yield iterator.next();
            if (done) {
                return ok(value); // Final value returned by the generator
            }
            if (!value.ok) {
                return value; // Propagate the error
            }
        }
    });
}
