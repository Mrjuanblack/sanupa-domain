"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceEntity = void 0;
class PriceEntity {
    constructor(id, partnerProductId, max, price) {
        this.id = id;
        this.partnerProductId = partnerProductId;
        this.max = max;
        this.price = price;
    }
}
exports.PriceEntity = PriceEntity;
