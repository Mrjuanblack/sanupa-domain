export type OkResult<T> = {
    ok: true;
    value: T;
};
export type ErrorResult = {
    ok: false;
    message: string;
    code: string;
};
export type RequestResult<T> = OkResult<T> | ErrorResult;
export declare function requestOk<T>(value: T): RequestResult<T>;
export declare function requestError<T>(message: string, code: string): RequestResult<T>;
