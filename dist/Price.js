"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceEntity = void 0;
exports.findPrice = findPrice;
class PriceEntity {
    constructor(id, partnerProductId, max, price) {
        this.id = id;
        this.partnerProductId = partnerProductId;
        this.max = max;
        this.price = price;
    }
}
exports.PriceEntity = PriceEntity;
function findPrice(quantity, prices) {
    // Sort prices by max in ascending order
    const sortedPrices = [...prices].sort((a, b) => a.max - b.max);
    // Find the first price where quantity <= max
    const foundPrice = sortedPrices.find(price => quantity <= price.max);
    // If no price is found (quantity is greater than all max values),
    // return the last price (highest max)
    return foundPrice || sortedPrices[sortedPrices.length - 1];
}
