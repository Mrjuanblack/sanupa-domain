"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoProcessorDailyCountEntity = void 0;
class PhotoProcessorDailyCountEntity {
    constructor(data) {
        this.userId = data.userId;
        this.processedCount = data.processedCount;
        this.date = data.date;
    }
}
exports.PhotoProcessorDailyCountEntity = PhotoProcessorDailyCountEntity;
