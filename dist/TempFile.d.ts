export interface TempFile {
    id: number;
    filePath: string;
    createdOn: Date;
}
export declare class TempFileEntity implements TempFile {
    id: number;
    filePath: string;
    createdOn: Date;
    constructor(id: number, filePath: string, createdOn: Date);
}
