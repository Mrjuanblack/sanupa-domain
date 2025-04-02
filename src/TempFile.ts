export interface TempFile {
    id: number
    filePath: string
    createdOn: Date
}

export class TempFileEntity implements TempFile {
    constructor(public id: number, public filePath: string, public createdOn: Date) { }
}