export interface TempFile {
    id: number;
    filePath: string;
}
export declare class TempFileEntity implements TempFile {
    id: number;
    filePath: string;
    constructor(id: number, filePath: string);
}
