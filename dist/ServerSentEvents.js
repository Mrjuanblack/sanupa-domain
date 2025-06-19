"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSE_FormatWrite = void 0;
const SSE_FormatWrite = (data) => {
    return `data: ${JSON.stringify(data)}\n\n`;
};
exports.SSE_FormatWrite = SSE_FormatWrite;
