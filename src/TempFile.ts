export interface TempFile {
    id: number
    filePath: string
    createdAt: Date
}

export class TempFileEntity implements TempFile {
    constructor(public id: number, public filePath: string, public createdAt: Date) { }
}