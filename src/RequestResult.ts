export type RequestResult<T> = {
    ok: true;
    value: T;
} | {
    ok: false;
    message: string;
    code: string;
}

export function requestOk<T>(value:T): RequestResult<T> {
    return { ok: true, value }
}

export function requestError<T>(message: string, code: string): RequestResult<T> {
    return { ok: false, message, code }    
}