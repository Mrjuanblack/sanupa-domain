export interface ReadExcelRequestResult {
    created: number;
    updated: number;
    errors: string[];
}
export declare class ReadExcelRequestResultEntity implements ReadExcelRequestResult {
    created: number;
    updated: number;
    errors: string[];
    constructor(created: number, updated: number, errors: string[]);
}
