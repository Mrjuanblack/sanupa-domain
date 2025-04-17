export interface ProcessedProductsDailyCount {
    id: number;
    userId: number;
    processedCount: number;
    date: Date;
}
export declare class ProcessedProductsDailyCountEntity implements ProcessedProductsDailyCount {
    id: number;
    userId: number;
    processedCount: number;
    date: Date;
    constructor(data: ProcessedProductsDailyCount);
}
