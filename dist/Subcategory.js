"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubcategoryEntity = void 0;
class SubcategoryEntity {
    constructor(id, categoryId, name, imgPath, active) {
        this.id = id;
        this.categoryId = categoryId;
        this.name = name;
        this.imgPath = imgPath;
        this.active = active;
    }
}
exports.SubcategoryEntity = SubcategoryEntity;
