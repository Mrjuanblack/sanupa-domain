/**
 * Represents a request to create a new time range. Also used for updates.
 */
export interface CreateTimeRangeRequest {
    startHour: number;
    endHour: number;
    hoursAfterEnd_AutomaticReview: number;
}
/**
 * Represents a time range for deliveries to be scheduled.
 */
export interface TimeRange {
    id: number;
    startHour: number;
    endHour: number;
    hoursAfterEnd_AutomaticReview: number;
}
export declare class TimeRangeEntity implements TimeRange {
    id: number;
    startHour: number;
    endHour: number;
    hoursAfterEnd_AutomaticReview: number;
    constructor(id: number, startHour: number, endHour: number, hoursAfterEnd_AutomaticReview: number);
    /**
     * Returns the start hour formatted in 12-hour format with AM/PM indicator
     * @returns Formatted time string (e.g., "9:00 AM", "2:30 PM")
     */
    getFormattedStartHour(): string;
    /**
     * Returns the end hour formatted in 12-hour format with AM/PM indicator
     * @returns Formatted time string (e.g., "9:00 AM", "2:30 PM")
     */
    getFormattedEndHour(): string;
    getFormattedTimeRange(): string;
}
