export interface TempFile {
    id: number;
    filePath: string;
    createdAt: Date;
}
export declare class TempFileEntity implements TempFile {
    id: number;
    filePath: string;
    createdAt: Date;
    constructor(id: number, filePath: string, createdAt: Date);
}
