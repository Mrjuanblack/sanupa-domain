export interface TempFile {
    id: number
    filePath: string
}

export class TempFileEntity implements TempFile {
    constructor(public id: number, public filePath: string) { }
}