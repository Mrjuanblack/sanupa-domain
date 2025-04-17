export interface ProcessedProductsDailyCount {
    id: number;
    userId: number;
    processedCount: number;
    date: Date;
}

export class ProcessedProductsDailyCountEntity implements ProcessedProductsDailyCount {
    id: number;
    userId: number;
    processedCount: number;
    date: Date;

    constructor(data: ProcessedProductsDailyCount) {
        this.id = data.id;
        this.userId = data.userId;
        this.processedCount = data.processedCount;
        this.date = data.date;
    }
} 