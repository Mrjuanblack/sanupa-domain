export interface GS1_Result {
    code: string
    description: string
    brand: string
    imageUrl: string
    netContentCode: string
    netContentValue: string
}

export class GS1_ResultEntity implements GS1_Result {
    constructor(
        public code: string,
        public description: string,
        public brand: string,
        public imageUrl: string,
        public netContentCode: string,
        public netContentValue: string,
    ) { }
}