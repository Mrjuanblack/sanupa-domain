export interface NewPriceRequest {
    partnerProductId: number
    max: number
    price: number
}

export interface Price {
    id: number,
    partnerProductId: number,
    max: number,
    price: number
}

export class PriceEntity implements Price {
    constructor(
        public id: number,
        public partnerProductId: number,
        public max: number,
        public price: number
    ) { }
}

export interface UpdatePriceRequest {
    id: number,
    partnerProductId: number,
    max: number,
    price: number
}

export function findPrice(quantity: number, prices: Price[]): Price {
    // Sort prices by max in ascending order
    const sortedPrices = [...prices].sort((a, b) => a.max - b.max);
    
    // Find the first price where quantity <= max
    const foundPrice = sortedPrices.find(price => quantity <= price.max);
    
    // If no price is found (quantity is greater than all max values),
    // return the last price (highest max)
    return foundPrice || sortedPrices[sortedPrices.length - 1];
}
