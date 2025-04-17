"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessedProductsDailyCountEntity = void 0;
class ProcessedProductsDailyCountEntity {
    constructor(data) {
        this.id = data.id;
        this.userId = data.userId;
        this.processedCount = data.processedCount;
        this.date = data.date;
    }
}
exports.ProcessedProductsDailyCountEntity = ProcessedProductsDailyCountEntity;
