// export function parseStringToInt(value: string | undefined): number | false {
//     if(!value) return false;
//     const parsed = Number(value);
//     if(Number.isInteger(parsed)) return parsed;
//     return false;
// }

export interface Nothing {
    id: number;
}

export class NothingEntity implements Nothing {
    constructor(public id: number) { }
}