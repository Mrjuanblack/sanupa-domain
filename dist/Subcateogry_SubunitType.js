"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubcategorySubunitTypeWithProductsCountEntity = exports.SubcategorySubunitTypeEntity = void 0;
class SubcategorySubunitTypeEntity {
    constructor(id, subcategoryId, name) {
        this.id = id;
        this.subcategoryId = subcategoryId;
        this.name = name;
    }
}
exports.SubcategorySubunitTypeEntity = SubcategorySubunitTypeEntity;
class SubcategorySubunitTypeWithProductsCountEntity {
    constructor(id, subcategoryId, name, productsCount) {
        this.id = id;
        this.subcategoryId = subcategoryId;
        this.name = name;
        this.productsCount = productsCount;
    }
}
exports.SubcategorySubunitTypeWithProductsCountEntity = SubcategorySubunitTypeWithProductsCountEntity;
