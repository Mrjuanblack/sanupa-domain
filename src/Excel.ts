export interface ReadExcelRequestResult {
    created: number
    updated: number
    errors: string[]
}

export class ReadExcelRequestResultEntity implements ReadExcelRequestResult {
    constructor(
        public created: number,
        public updated: number,
        public errors: string[]
    ) { }
}