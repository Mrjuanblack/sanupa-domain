"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsOverviewEntity = void 0;
class ProductsOverviewEntity {
    constructor(name, imagePath, price, quantity, checked) {
        this.name = name;
        this.imagePath = imagePath;
        this.price = price;
        this.quantity = quantity;
        this.checked = checked;
    }
}
exports.ProductsOverviewEntity = ProductsOverviewEntity;
