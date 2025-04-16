export interface PhotoProcessorDailyCount {
    userId: number;
    processedCount: number;
    date: Date;
}

export class PhotoProcessorDailyCountEntity implements PhotoProcessorDailyCount {
    userId: number;
    processedCount: number;
    date: Date;

    constructor(data: PhotoProcessorDailyCount) {
        this.userId = data.userId;
        this.processedCount = data.processedCount;
        this.date = data.date;
    }
} 