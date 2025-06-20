"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeRangeEntity = void 0;
function getFormattedTime(hour) {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:00 ${period}`;
}
class TimeRangeEntity {
    constructor(id, startHour, endHour, hoursAfterEnd_AutomaticReview) {
        this.id = id;
        this.startHour = startHour;
        this.endHour = endHour;
        this.hoursAfterEnd_AutomaticReview = hoursAfterEnd_AutomaticReview;
    }
    /**
     * Returns the start hour formatted in 12-hour format with AM/PM indicator
     * @returns Formatted time string (e.g., "9:00 AM", "2:30 PM")
     */
    getFormattedStartHour() {
        return getFormattedTime(this.startHour);
    }
    /**
     * Returns the end hour formatted in 12-hour format with AM/PM indicator
     * @returns Formatted time string (e.g., "9:00 AM", "2:30 PM")
     */
    getFormattedEndHour() {
        return getFormattedTime(this.endHour);
    }
    getFormattedTimeRange() {
        return `${this.getFormattedStartHour()} - ${this.getFormattedEndHour()}`;
    }
}
exports.TimeRangeEntity = TimeRangeEntity;
