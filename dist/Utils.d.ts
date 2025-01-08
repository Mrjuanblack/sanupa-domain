export declare function parseStringToInt(value: string | undefined): number | false;
export interface Nothing {
    id: number;
}
export declare class NothingEntity implements Nothing {
    id: number;
    constructor(id: number);
}
