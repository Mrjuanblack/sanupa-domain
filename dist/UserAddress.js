"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserAddressRequestEntity = exports.NewUserAddressRequestEntity = exports.UserAddressEntity = void 0;
class UserAddressEntity {
    constructor(id, zone, details) {
        this.id = id;
        this.zone = zone;
        this.details = details;
    }
}
exports.UserAddressEntity = UserAddressEntity;
class NewUserAddressRequestEntity {
    constructor(userId, zoneId, details) {
        this.userId = userId;
        this.zoneId = zoneId;
        this.details = details;
    }
}
exports.NewUserAddressRequestEntity = NewUserAddressRequestEntity;
class UpdateUserAddressRequestEntity {
    constructor(id, details) {
        this.id = id;
        this.details = details;
    }
}
exports.UpdateUserAddressRequestEntity = UpdateUserAddressRequestEntity;
