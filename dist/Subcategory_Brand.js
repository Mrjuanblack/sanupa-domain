"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubcategoryBrand_SuggestionEntity = exports.SubcategoryBrandWithProductsCountEntity = exports.SubcategoryBrandEntity = void 0;
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
class SubcategoryBrand_SuggestionEntity {
    constructor(id, subcategoryId, name, createdBy) {
        this.id = id;
        this.subcategoryId = subcategoryId;
        this.name = name;
        this.createdBy = createdBy;
    }
}
exports.SubcategoryBrand_SuggestionEntity = SubcategoryBrand_SuggestionEntity;
