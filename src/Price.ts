export interface NewPriceRequest {
    partnerProductId: number
    min: number
    max: number
    price: number
}

export interface Price {
    id: number,
    partnerProductId: number,
    min: number,
    max: number,
    price: number
}

export class PriceEntity implements Price {
    constructor(
        public id: number,
        public partnerProductId: number,
        public min: number,
        public max: number,
        public price: number
    ) { }
}

export interface UpdatePriceRequest {
    id: number,
    partnerProductId: number,
    min: number,
    max: number,
    price: number
}