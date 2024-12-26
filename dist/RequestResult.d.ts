export type RequestResult<T> = {
    ok: true;
    value: T;
} | {
    ok: false;
    message: string;
    code: string;
};
export declare function requestOk<T>(value: T): RequestResult<T>;
export declare function requestError<T>(message: string, code: string): RequestResult<T>;
