"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNamesRequestEntity = exports.UpdateEmailRequestEntity = exports.UpdateIdentificationRequestEntity = exports.UpdatePhoneNumberRequestEntity = exports.UpdatePasswordRequestEntity = exports.UserEntity = exports.UpdatePermissionsEntity = exports.UpdateFacturationInfoRequestEntity = exports.SimpleUser_WithPartnerInfoEntity = exports.SimpleUserEntity = exports.UserRole = exports.CCTypeList = exports.CCType = exports.LoginErrors = void 0;
exports.getCCTypeString = getCCTypeString;
exports.getUserRoleString = getUserRoleString;
exports.isUserCookie = isUserCookie;
var LoginErrors;
(function (LoginErrors) {
    LoginErrors[LoginErrors["InvalidPassword"] = 1] = "InvalidPassword";
    LoginErrors[LoginErrors["NoVerifiedPhone"] = 2] = "NoVerifiedPhone";
})(LoginErrors || (exports.LoginErrors = LoginErrors = {}));
var CCType;
(function (CCType) {
    CCType[CCType["CC"] = 1] = "CC";
    CCType[CCType["NIT"] = 2] = "NIT";
    CCType[CCType["PA"] = 3] = "PA";
    CCType[CCType["CE"] = 4] = "CE";
})(CCType || (exports.CCType = CCType = {}));
exports.CCTypeList = Object.values(CCType).filter(value => typeof value === 'number');
function getCCTypeString(ccType) {
    switch (ccType) {
        case CCType.CC:
            return "CC";
        case CCType.NIT:
            return "NIT";
        case CCType.PA:
            return "PA";
        case CCType.CE:
            return "CE";
    }
}
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
class SimpleUserEntity {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
exports.SimpleUserEntity = SimpleUserEntity;
class SimpleUser_WithPartnerInfoEntity {
    constructor(id, name, partnerInfo) {
        this.id = id;
        this.name = name;
        this.partnerInfo = partnerInfo;
    }
}
exports.SimpleUser_WithPartnerInfoEntity = SimpleUser_WithPartnerInfoEntity;
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
class UpdateFacturationInfoRequestEntity {
    constructor(name, lastName, ccType, cc, email) {
        this.name = name;
        this.lastName = lastName;
        this.ccType = ccType;
        this.cc = cc;
        this.email = email;
    }
}
exports.UpdateFacturationInfoRequestEntity = UpdateFacturationInfoRequestEntity;
class UpdatePermissionsEntity {
    constructor(id, allowedSubcategoriesId) {
        this.id = id;
        this.allowedSubcategoriesId = allowedSubcategoriesId;
    }
}
exports.UpdatePermissionsEntity = UpdatePermissionsEntity;
class UserEntity {
    constructor(id, name, lastName, email, ccType, cc, phoneNumber, password, role, partnerInfo) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.ccType = ccType;
        this.cc = cc;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.role = role;
        this.partnerInfo = partnerInfo;
    }
}
exports.UserEntity = UserEntity;
class UpdatePasswordRequestEntity {
    constructor(oldPassword, password) {
        this.oldPassword = oldPassword;
        this.password = password;
    }
}
exports.UpdatePasswordRequestEntity = UpdatePasswordRequestEntity;
class UpdatePhoneNumberRequestEntity {
    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
exports.UpdatePhoneNumberRequestEntity = UpdatePhoneNumberRequestEntity;
class UpdateIdentificationRequestEntity {
    constructor(ccType, cc) {
        this.ccType = ccType;
        this.cc = cc;
    }
}
exports.UpdateIdentificationRequestEntity = UpdateIdentificationRequestEntity;
class UpdateEmailRequestEntity {
    constructor(email) {
        this.email = email;
    }
}
exports.UpdateEmailRequestEntity = UpdateEmailRequestEntity;
class UpdateNamesRequestEntity {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}
exports.UpdateNamesRequestEntity = UpdateNamesRequestEntity;
