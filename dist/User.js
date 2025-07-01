"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNamesRequestEntity = exports.UpdateEmailRequestEntity = exports.UpdateIdentificationRequestEntity = exports.UpdatePhoneNumberRequestEntity = exports.UpdatePasswordRequestEntity = exports.UserEntity = exports.UpdatePermissionsEntity = exports.UpdateFacturationInfoRequestEntity = exports.SimpleUser_ContactInfoEntity = exports.SimpleUser_WithPartnerInfoEntity = exports.SimpleUserEntity = exports.AdditionalRole = exports.UserRole = exports.CCTypeList = exports.CCType = exports.LoginErrors = void 0;
exports.calculateBlockedTime = calculateBlockedTime;
exports.getCCTypeString = getCCTypeString;
exports.getUserRoleString = getUserRoleString;
exports.isUserCookie = isUserCookie;
function calculateBlockedTime(loginTries, blockedDate) {
    if (loginTries >= 3) {
        const helper = loginTries - 2;
        // Add 5 minutes for each try
        const blockedUntil = new Date(blockedDate);
        blockedUntil.setMinutes(blockedUntil.getMinutes() + (helper * 5));
        return blockedUntil;
    }
    return null;
}
var LoginErrors;
(function (LoginErrors) {
    LoginErrors[LoginErrors["InvalidPassword"] = 1] = "InvalidPassword";
    LoginErrors[LoginErrors["NoVerifiedPhone"] = 2] = "NoVerifiedPhone";
    LoginErrors[LoginErrors["Inactive"] = 3] = "Inactive";
    LoginErrors[LoginErrors["Blocked"] = 4] = "Blocked";
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
    UserRole[UserRole["PhotoAssistant"] = 4] = "PhotoAssistant";
    UserRole[UserRole["Verifier"] = 5] = "Verifier";
})(UserRole || (exports.UserRole = UserRole = {}));
var AdditionalRole;
(function (AdditionalRole) {
    AdditionalRole[AdditionalRole["Delivery"] = 1] = "Delivery";
})(AdditionalRole || (exports.AdditionalRole = AdditionalRole = {}));
const userRoleEnumToString = {
    [UserRole.User]: 'Usuario',
    [UserRole.Admin]: 'Administrador',
    [UserRole.Partner]: 'Socio',
    [UserRole.PhotoAssistant]: 'Asistente de Fotos',
    [UserRole.Verifier]: 'Verificador'
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
class SimpleUser_ContactInfoEntity {
    constructor(id, name, phoneNumber) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
}
exports.SimpleUser_ContactInfoEntity = SimpleUser_ContactInfoEntity;
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
    constructor(id, name, lastName, email, ccType, cc, phoneNumber, password, role, additionalRoles, active, partnerInfo, loginTries, blockedDate, blockedUntil) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.ccType = ccType;
        this.cc = cc;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.role = role;
        this.additionalRoles = additionalRoles;
        this.active = active;
        this.partnerInfo = partnerInfo;
        this.loginTries = loginTries;
        this.blockedDate = blockedDate;
        this.blockedUntil = blockedUntil;
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
