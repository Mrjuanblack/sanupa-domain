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
export declare function asyncResult<T, E>(generator: () => AsyncGenerator<Result<T, E>, T, T>): AsyncResult<T, E>;
