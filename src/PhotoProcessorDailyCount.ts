export interface PhotoProcessorDailyCount {
    id: number;
    userId: number;
    processedCount: number;
    date: Date;
}

export class PhotoProcessorDailyCountEntity implements PhotoProcessorDailyCount {
    id: number;
    userId: number;
    processedCount: number;
    date: Date;

    constructor(data: PhotoProcessorDailyCount) {
        this.id = data.id;
        this.userId = data.userId;
        this.processedCount = data.processedCount;
        this.date = data.date;
    }
} 