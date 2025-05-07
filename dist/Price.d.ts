export interface NewPriceRequest {
    partnerProductId: number;
    min: number;
    max: number;
    price: number;
}
export interface Price {
    id: number;
    partnerProductId: number;
    min: number;
    max: number;
    price: number;
}
export declare class PriceEntity implements Price {
    id: number;
    partnerProductId: number;
    min: number;
    max: number;
    price: number;
    constructor(id: number, partnerProductId: number, min: number, max: number, price: number);
}
export interface UpdatePriceRequest {
    partnerProductId: number;
    min: number;
    max: number;
    price: number;
}
