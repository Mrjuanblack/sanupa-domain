export type Result<T, E> = {
    ok: true;
    value: T;
} | {
    ok: false;
    error: E;
};
export type AsyncResult<T, E> = Promise<Result<T, E>>;
export declare function ok<T, E>(value: T): Result<T, E>;
export declare function err<T, E>(error: E): Result<T, E>;
export declare function asyncChain<T, E>(fn: () => AsyncResult<T, E>): Promise<T>;
