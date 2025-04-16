"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubcategoryProductTypeWithProductsCountEntity = exports.SubcategoryProductTypeEntity = void 0;
class SubcategoryProductTypeEntity {
    constructor(id, subcategoryId, name) {
        this.id = id;
        this.subcategoryId = subcategoryId;
        this.name = name;
    }
}
exports.SubcategoryProductTypeEntity = SubcategoryProductTypeEntity;
class SubcategoryProductTypeWithProductsCountEntity {
    constructor(id, subcategoryId, name, productsCount) {
        this.id = id;
        this.subcategoryId = subcategoryId;
        this.name = name;
        this.productsCount = productsCount;
    }
}
exports.SubcategoryProductTypeWithProductsCountEntity = SubcategoryProductTypeWithProductsCountEntity;
