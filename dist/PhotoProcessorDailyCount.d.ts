export interface PhotoProcessorDailyCount {
    id: number;
    userId: number;
    processedCount: number;
    date: Date;
}
export declare class PhotoProcessorDailyCountEntity implements PhotoProcessorDailyCount {
    id: number;
    userId: number;
    processedCount: number;
    date: Date;
    constructor(data: PhotoProcessorDailyCount);
}
