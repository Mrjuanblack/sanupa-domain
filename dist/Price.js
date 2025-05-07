"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceEntity = void 0;
class PriceEntity {
    constructor(id, partnerProductId, min, max, price) {
        this.id = id;
        this.partnerProductId = partnerProductId;
        this.min = min;
        this.max = max;
        this.price = price;
    }
}
exports.PriceEntity = PriceEntity;
