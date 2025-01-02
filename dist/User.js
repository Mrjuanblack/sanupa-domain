"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = exports.UserRole = void 0;
exports.isUserCookie = isUserCookie;
var UserRole;
(function (UserRole) {
    UserRole[UserRole["User"] = 1] = "User";
    UserRole[UserRole["Admin"] = 2] = "Admin";
})(UserRole || (exports.UserRole = UserRole = {}));
function isUserCookie(o) {
    return (typeof o === 'object' &&
        o !== null &&
        'id' in o &&
        typeof o.id === 'number' &&
        'name' in o &&
        typeof o.name === 'string' &&
        'email' in o &&
        typeof o.email === 'string' &&
        'phoneNumber' in o &&
        typeof o.phoneNumber === 'string');
}
class UserEntity {
    constructor(id, name, email, phoneNumber, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }
}
exports.UserEntity = UserEntity;
