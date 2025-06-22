"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WS_Notifications = exports.WS_RegularNotificationType = exports.WS_NotificationEvents = exports.WS_ProductsCreate = exports.WS_Emails = exports.WS_GenericProgress = void 0;
var WS_GenericProgress;
(function (WS_GenericProgress) {
    WS_GenericProgress["GenericProgress"] = "genericProgress";
})(WS_GenericProgress || (exports.WS_GenericProgress = WS_GenericProgress = {}));
var WS_Emails;
(function (WS_Emails) {
    WS_Emails["EmailProgress"] = "emailProgress";
    WS_Emails["EmailError"] = "emailError";
})(WS_Emails || (exports.WS_Emails = WS_Emails = {}));
var WS_ProductsCreate;
(function (WS_ProductsCreate) {
    WS_ProductsCreate["ProductsCreateProgress"] = "productsCreateProgress";
    WS_ProductsCreate["ProductsCreateError"] = "productsCreateError";
})(WS_ProductsCreate || (exports.WS_ProductsCreate = WS_ProductsCreate = {}));
// Notifications
var WS_NotificationEvents;
(function (WS_NotificationEvents) {
    WS_NotificationEvents["Refresh"] = "notificationRefresh";
    WS_NotificationEvents["UpdateStock"] = "notificationUpdateStock";
    WS_NotificationEvents["RegularNotification"] = "notificationRegular";
})(WS_NotificationEvents || (exports.WS_NotificationEvents = WS_NotificationEvents = {}));
var WS_RegularNotificationType;
(function (WS_RegularNotificationType) {
    WS_RegularNotificationType[WS_RegularNotificationType["DeliveryTimeWarning"] = 1] = "DeliveryTimeWarning";
    WS_RegularNotificationType[WS_RegularNotificationType["DeliveryTimeFailure"] = 2] = "DeliveryTimeFailure";
})(WS_RegularNotificationType || (exports.WS_RegularNotificationType = WS_RegularNotificationType = {}));
class WS_Notifications {
}
exports.WS_Notifications = WS_Notifications;
WS_Notifications.GetNotificationRoomName = (userId) => {
    return `notification:${userId}`;
};
WS_Notifications.GetNotificationEventName_Error = (userId) => {
    return `notificationError:${userId}`;
};
WS_Notifications.GetNotificationEventName_Connected = (userId) => {
    return `notificationConnected:${userId}`;
};
