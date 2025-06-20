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

function getFormattedTime(hour: number): string {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:00 ${period}`;
}

export class TimeRangeEntity implements TimeRange {
    constructor(
        public id: number,
        public startHour: number,
        public endHour: number,
        public hoursAfterEnd_AutomaticReview: number,
    ) { }

    /**
     * Returns the start hour formatted in 12-hour format with AM/PM indicator
     * @returns Formatted time string (e.g., "9:00 AM", "2:30 PM")
     */
    getFormattedStartHour(): string {
        return getFormattedTime(this.startHour);
    }

    /**
     * Returns the end hour formatted in 12-hour format with AM/PM indicator
     * @returns Formatted time string (e.g., "9:00 AM", "2:30 PM")
     */
    getFormattedEndHour(): string {
        return getFormattedTime(this.endHour);  
    }

    getFormattedTimeRange(): string {
        return `${this.getFormattedStartHour()} - ${this.getFormattedEndHour()}`;
    }
}
