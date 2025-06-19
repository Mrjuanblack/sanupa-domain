export type SSE_Data<T> = {
    type: 'connected',
    message: 'Listening for events'
} | {
    type: 'event',
    value: T
}

export const SSE_FormatWrite = <T>(data: SSE_Data<T>) => {
    return `data: ${JSON.stringify(data)}\n\n`;
}