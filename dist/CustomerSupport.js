"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewCustomerSupportEntity = exports.CustomerSupportEntity = void 0;
class CustomerSupportEntity {
    constructor(childOrderId, userId, text, img) {
        this.childOrderId = childOrderId;
        this.userId = userId;
        this.text = text;
        this.img = img;
    }
}
exports.CustomerSupportEntity = CustomerSupportEntity;
class NewCustomerSupportEntity {
    constructor(childOrderId, text) {
        this.childOrderId = childOrderId;
        this.text = text;
    }
}
exports.NewCustomerSupportEntity = NewCustomerSupportEntity;
