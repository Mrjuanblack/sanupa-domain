"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserAddressRequestEntity = exports.NewUserAddressRequestEntity = exports.UserAddressEntity = void 0;
class UserAddressEntity {
    constructor(zone, details) {
        this.zone = zone;
        this.details = details;
    }
}
exports.UserAddressEntity = UserAddressEntity;
class NewUserAddressRequestEntity {
    constructor(userId, zoneId, details) { }
}
exports.NewUserAddressRequestEntity = NewUserAddressRequestEntity;
class UpdateUserAddressRequestEntity {
    constructor(userId, details) { }
}
exports.UpdateUserAddressRequestEntity = UpdateUserAddressRequestEntity;
