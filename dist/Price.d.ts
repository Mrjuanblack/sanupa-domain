export interface NewPriceRequest {
    partnerProductId: number;
    max: number;
    price: number;
}
export interface Price {
    id: number;
    partnerProductId: number;
    max: number;
    price: number;
}
export declare class PriceEntity implements Price {
    id: number;
    partnerProductId: number;
    max: number;
    price: number;
    constructor(id: number, partnerProductId: number, max: number, price: number);
}
export interface UpdatePriceRequest {
    id: number;
    partnerProductId: number;
    max: number;
    price: number;
}
export declare function findPrice(quantity: number, prices: Price[]): Price;
