export interface PhotoProcessorDailyCount {
    userId: number;
    processedCount: number;
    date: Date;
}
export declare class PhotoProcessorDailyCountEntity implements PhotoProcessorDailyCount {
    userId: number;
    processedCount: number;
    date: Date;
    constructor(data: PhotoProcessorDailyCount);
}
