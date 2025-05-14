"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductErrorReportEntity = void 0;
class ProductErrorReportEntity {
    constructor(productId, generalDescription, nameSuggestion, descriptionSuggestion, createdAt, resolvedAt) {
        this.productId = productId;
        this.generalDescription = generalDescription;
        this.nameSuggestion = nameSuggestion;
        this.descriptionSuggestion = descriptionSuggestion;
        this.createdAt = createdAt;
        this.resolvedAt = resolvedAt;
    }
}
exports.ProductErrorReportEntity = ProductErrorReportEntity;
