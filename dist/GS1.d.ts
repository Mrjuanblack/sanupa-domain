export interface GS1_Result {
    description: string;
    brand: string;
    imageUrl: string;
    netContentCode: string;
    netContentValue: string;
}
export declare class GS1_ResultEntity implements GS1_Result {
    description: string;
    brand: string;
    imageUrl: string;
    netContentCode: string;
    netContentValue: string;
    constructor(description: string, brand: string, imageUrl: string, netContentCode: string, netContentValue: string);
}
