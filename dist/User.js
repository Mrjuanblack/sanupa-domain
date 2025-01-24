"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = exports.UpdateUserRequestEntity = exports.UserRole = void 0;
exports.getUserRoleString = getUserRoleString;
exports.isUserCookie = isUserCookie;
var UserRole;
(function (UserRole) {
    UserRole[UserRole["User"] = 1] = "User";
    UserRole[UserRole["Admin"] = 2] = "Admin";
    UserRole[UserRole["Partner"] = 3] = "Partner";
})(UserRole || (exports.UserRole = UserRole = {}));
const userRoleEnumToString = {
    [UserRole.User]: 'Usuario',
    [UserRole.Admin]: 'Administrador',
    [UserRole.Partner]: 'Socio',
};
function getUserRoleString(role) {
    return userRoleEnumToString[role];
}
function isUserCookie(o) {
    return (typeof o === 'object' &&
        o !== null &&
        'id' in o &&
        typeof o.id === 'number' &&
        'name' in o &&
        typeof o.name === 'string' &&
        'email' in o &&
        typeof o.email === 'string' || o.email === null &&
        'phoneNumber' in o &&
        typeof o.phoneNumber === 'string');
}
class UpdateUserRequestEntity {
    constructor(id, name, email, phoneNumber, role, allowedSubcategories) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.role = role;
        this.allowedSubcategories = allowedSubcategories;
    }
}
exports.UpdateUserRequestEntity = UpdateUserRequestEntity;
class UserEntity {
    constructor(id, name, email, phoneNumber, password, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.role = role;
    }
}
exports.UserEntity = UserEntity;
