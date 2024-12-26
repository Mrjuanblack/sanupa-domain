export type OkResult<T> = {
    ok: true;
    value: T;
}

export type ErrorResult = {
    ok: false;
    message: string;
    code: string;
}

export type RequestResult<T> = OkResult<T> | ErrorResult

export function requestOk<T>(value:T): RequestResult<T> {
    return { ok: true, value }
}

export function requestError<T>(message: string, code: string): RequestResult<T> {
    return { ok: false, message, code }    
}