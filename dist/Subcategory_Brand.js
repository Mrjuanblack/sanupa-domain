"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubcategoryBrandWithProductsCountEntity = exports.SubcategoryBrandEntity = void 0;
class SubcategoryBrandEntity {
    constructor(id, subcategoryId, name) {
        this.id = id;
        this.subcategoryId = subcategoryId;
        this.name = name;
    }
}
exports.SubcategoryBrandEntity = SubcategoryBrandEntity;
class SubcategoryBrandWithProductsCountEntity {
    constructor(id, subcategoryId, name, productsCount) {
        this.id = id;
        this.subcategoryId = subcategoryId;
        this.name = name;
        this.productsCount = productsCount;
    }
}
exports.SubcategoryBrandWithProductsCountEntity = SubcategoryBrandWithProductsCountEntity;
