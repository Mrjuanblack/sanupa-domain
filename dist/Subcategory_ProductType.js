"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubcategoryProductType_SuggestionEntity = exports.SubcategoryProductTypeWithProductsCountEntity = exports.SubcategoryProductTypeEntity = void 0;
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
class SubcategoryProductType_SuggestionEntity {
    constructor(id, subcategoryId, name, createdBy) {
        this.id = id;
        this.subcategoryId = subcategoryId;
        this.name = name;
        this.createdBy = createdBy;
    }
}
exports.SubcategoryProductType_SuggestionEntity = SubcategoryProductType_SuggestionEntity;
