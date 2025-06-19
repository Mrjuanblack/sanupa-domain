export type SSE_Data<T> = {
    type: 'connected';
    message: 'Listening for events';
} | {
    type: 'event';
    value: T;
};
export declare const SSE_FormatWrite: <T>(data: SSE_Data<T>) => string;
